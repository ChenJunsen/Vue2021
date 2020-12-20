<template>
    <div class="btn-container" :class="{
        small,
        large,
        normal,
        disabled
    }">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: {
                type: String | Number,
                default: ''
            },
            size: {
                type: String,
                default: 'normal'//small normal large
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            small() {
                return this.size === 'small'
            },
            large() {
                return this.size === 'large'
            },
            normal() {
                return this.size === 'normal'
            }
        },
        mounted() {
            console.log(this.text + ' ' + this.size + ' ' + this.disabled)
        }
    }
</script>

<style lang="stylus" scoped>
    .btn-container {
        display inline-block
        border-radius 4px
        min-height 45px
        min-width 80px
        box-sizing border-box
        padding-left 20px
        padding-right 20px
        padding-top 10px
        padding-bottom 10px
        color #FFFFFF
        background #4cbdfe

        &:active {
            background #ECF5FF
        }
    }

    .disabled {
        color #8CC5FF
        background #ECF5FF
        border-color #D9ECFF
    }

    .normal {
        font-size 14px
    }

    .small {
        font-size 12px
    }

    .large {
        font-size 18px
    }
</style>
