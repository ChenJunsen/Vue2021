<template>
    <div class="btn-container"
         @click="$_onClick"
         :class="{
        small,
        large,
        normal,
        disabled
    }">
        {{text}}
    </div>
</template>

<script>
    import {debounce} from 'lodash'

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
        },
        methods: {
            $_onClick: debounce(function ($event) {
                this.$emit('click', $event)
            }, 500, {leading: true})
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
