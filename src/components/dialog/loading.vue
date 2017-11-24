<style lang="scss">
  @import "./dialog";
</style>
<style lang="scss" scoped="">
  @import "../../style/functions";

  .dialog__wrap {
    .dialog__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .dialog__text {
      font-size: px2rem(28);
      margin-top: px2rem(20);
    }
  }
</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="modal_show" class="dialog__wrap">
    <div class="dialog__inner">
      <slot>
        <template v-if="inner_type=='loading'">
          <img class="window__icon loading__icon rotate__animation" src="./images/loading@3x.png"/>
        </template>
        <template v-if="inner_type=='success'">
          <img class="window__icon" src="./images/success@3x.png"/>
        </template>
        <template v-if="inner_type=='fail'||inner_type=='error'">
          <img class="window__icon" src="./images/fail@3x.png"/>
        </template>
      </slot>
      <slot name="text">
        <div class="dialog__text" v-if="inner_text">{{ inner_text }}</div>
      </slot>
    </div>
  </modal>
</template>
<script>
  import Mixins from './_mixins'

  export default {
    name: 'Loading',
    mixins: [Mixins],
    props: {
      type: {
        type: String,
        default: 'loading'
      },
      text: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        inner_type: this.type
      }
    },
    methods: {

      setText (text) {
        this.inner_text = text
        return this
      },
      setType (type) {
        this.inner_type = type
        return this
      },
    }
  }
</script>