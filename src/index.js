const InformSinkNotification = require('./InformSinkNotification.js');
module.exports = {
  name: 'not-inform-sink-notification',
	paths:{
		controllers:  __dirname + '/controllers'
	},
  getClass(){
    return InformSinkNotification;
  }
};
