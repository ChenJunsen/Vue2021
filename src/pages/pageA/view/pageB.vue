<template>
    <div id="app">
        <h1>pageB</h1>
        <Button @click="back">返回</Button>
    </div>
</template>

<script>
    import Button from '@components/Button'

    export default {
        components: {Button},
        name: "pageB",
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
