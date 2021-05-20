const log = require('not-log')(module, 'InformSinkNotification');
try{
	const
		notNode = require('not-node'),
		Sink = require('not-inform').Sink,
		hb = require('handlebars');

	class InformSinkNotification extends Sink{
		/**
		 * @param {object} options
		 */
		constructor(options){
			super(options);
			return this;
		}

		async deploy(message, rule){
			try{
				await this.deployCycle(message, rule);
			}catch(e){
				log.error(e);
			}
		}

		async deployOne({message, recipient,  index, recipientsFilter, rule}){
			const	Notification = notNode.Application.getLogic('Notification')
			let
				owner = recipient._id,
				ownerModel = recipientsFilter.modelName,
				options = {};

			if(rule && rule.getData()){
				options = Object.assign(options, rule.getData());
			}
			let	text = hb.compile(options.templates.text),
					title = hb.compile(options.templates.subject),
					link = options.templates.link?hb.compile(options.templates.link): false,
					notifyOptions = {
						owner,
						ownerModel,
						title: 			title(message), 		// Subject line
						text: 			text(message),
					};
			if(link){
				notifyOptions.link = link(message);
			}
			Notification.notify(notifyOptions)
				.then((res)=>{
					if(res.status === 'ok'){
						log.log(`notify deployed: "${res.result.title}" to ${res.result.ownerModel}:${res.result.owner} with _id#${res.result._id} `);
					}else{
						log.error(res);
					}
				})
				.catch((e)=>{
					log.error(e);
				});
		}

	}
	module.exports = InformSinkNotification;

}catch(e){
	log.error(e);
}
