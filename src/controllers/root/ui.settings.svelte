<script>
    export let value = false;
    // svelte-ignore unused-export-let
    export let readonly;
    // svelte-ignore unused-export-let
    export let disabled;
</script>

{#if value}
    <div class="notification is-warning">Настройки извещений отсутствуют.</div>
{/if}
