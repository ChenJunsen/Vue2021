<template>
    <div id="app">
        <h1>欢迎进入Vue的多页面实例 pageA</h1>
        <Button @click="goToPage('pageB')" text="跳转页面B"></Button>
        <Button @click="goToPage('pageC')" text="跳转页面C"></Button>
        <div>
            <Button @click="count++" text="防抖测试"></Button>
            <span class="count">{{count}}</span>
        </div>

    </div>
</template>

<script>
    import Button from '@components/Button'

    export default {
        components: {Button},
        name: "pageA",
        data() {
            return {
                count: 0
            }
        },
        mounted() {
            console.log('pageA mounted！')
        },
        methods: {
            goToPage(pageName) {
                this.$router.push({
                    name: pageName
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .count{
        font-size 16px
        margin-left 10px
    }
</style>
