<script lang="ts">
    export let title = '';
    export let subtitle = '';
    export let value = '';
    export let name = '';
    export let placeholder = '';
</script>

<div class="input-group">
    <p>
        {title}
        {#if subtitle}<small>({subtitle})</small>{/if}
    </p>
    <input type="text" bind:value {name} {placeholder} />
</div>

<style lang="scss">
    .input-group {
        width: 100%;

        p {
            font-size: 10px;
            line-height: 18px;
            margin-bottom: 5px;
        }

        input {
            width: 100%;
            background: var(--primary-hoverground-color);
            border: 0px;
            border-radius: 0%;
            color: var(--primary-foreground-color);
            padding: 5px 5px;
            font-size: 10px;
        }
    }
</style>
