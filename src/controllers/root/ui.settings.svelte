<script>
    export let value = false;
    export let readonly;
    export let disabled;
</script>

{#if value}
    <div class="notification is-warning">Настройки извещений отсутствуют.</div>
{/if}
