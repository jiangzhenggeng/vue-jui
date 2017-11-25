<style lang="scss">
  @import "./dialog";
</style>
<style lang="scss" scoped="">
  @import "../../style/functions";

  .dialog__wrap {

    .dialog__inner {
      width: 80%;
      height: auto;

      .confirm__body {
        padding: px2rem(50) px2rem(24);
        text-align: center;
        font-size: px2rem(32);
        min-height: px2rem(120);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .confirm__btn-wrap {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        user-select: none;
      }
      .confirm__btn-wrap {
        border-top: px2rem(1.5) solid #ccc;
        text-align: center;
        height: px2rem(90);
      }
      .confirm__btn {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: px2rem(30);
        &:active {
          background-color: #f7f7f7;
          color: #666;
        }
        &:nth-child(2) {
          border-left: px2rem(1.5) solid #ccc;
        }
      }
    }
    .window__modal-zoom{
      background: #fff;
      border-radius: px2rem(10);
    }
  }
</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="modal_show" class="dialog__wrap">
    <div class="dialog__inner">
      <div class="window__modal-zoom">
        <div class="confirm__body">
          <slot></slot>
          <slot name="content">
            <div class="dialog__text" v-if="inner_text">{{ inner_text }}</div>
          </slot>
        </div>
        <div class="confirm__btn-wrap">
          <div v-if="inner_type=='confirm'" class="confirm__btn" @click="cancel">
            <slot name="left-btn">取消</slot>
          </div>
          <div class="confirm__btn" @click="ok">
            <slot name="right-btn">确认</slot>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
  import Mixins from './_mixins'

  export default {
    name: 'Dialog',
    mixins: [Mixins],
    props: {
      type: {
        type: String,
        default: 'confirm'
      }
    },
    data () {
      return {
        inner_type: this.type
      }
    },
    methods: {
      setType (type) {
        this.inner_type = type
        return this
      },
      cancel () {
        this.$emit('cancel')
        this.close()
        return this
      },
      ok () {
        this.$emit('ok')
        this.close()
        return this
      }
    }
  }
</script>