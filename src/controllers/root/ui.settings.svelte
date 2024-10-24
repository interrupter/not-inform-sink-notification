<script>
    
    
    /**
     * @typedef {Object} Props
     * @property {boolean} [value]
     * @property {any} readonly - svelte-ignore unused-export-let
     * @property {any} disabled - svelte-ignore unused-export-let
     */

    /** @type {Props} */
    let { value = false, readonly, disabled } = $props();
</script>

{#if value}
    <div class="notification is-warning">Настройки извещений отсутствуют.</div>
{/if}
