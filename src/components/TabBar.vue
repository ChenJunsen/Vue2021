<template>
    <div class="tb-container">
        <Button text="123"></Button>
        <Button text="国家" size="large"></Button>
        <Button text="GHJ" size="small" disabled></Button>
    </div>
</template>

<script>
    import Button from './Button'

    export default {
        name: 'TabBar',
        components: {Button},
        props: {
            msg: String
        }
    }
</script>

<style lang="stylus" scoped>
    .tb-container {

    }
</style>
