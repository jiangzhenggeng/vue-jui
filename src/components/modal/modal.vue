<style lang="scss">

  @import "../../style/functions";

  .window__modal-enter-active, .window__modal-leave-active {
    transition: all .3s;
  }

  .window__modal-enter, .window__modal-leave-active {
    opacity: 0;
    transform: scale(1.5);
  }

  .window__modal {
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    &.no-event {
      pointer-events: none;
    }
    &.mask {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
</style>
<template>
  <transition name="window__modal">
    <div v-if="modal_show" class="window__modal" :class="{'no-event':!modal,'mask':modal_mask}">
      <slot>{{ modal_show }}</slot>
    </div>
  </transition>
</template>
<script>
  var eventsList = ['mousewheel', 'DOMMouseScroll', 'touchmove']
  export default {
    name: 'Modal',
    props: {
      modal: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      visible (newVal) {
        this.modal_show = newVal
        this.$_init(true)
      },
      modal_show (newVal) {
        this.$_init(newVal)
      }
    },
    data () {
      return {
        modal_show: this.visible,
        modal_mask: this.mask
      }
    },
    methods: {
      $_init (newVal) {
        if (newVal) {
          eventsList.forEach((item) => {
            window.addEventListener(item, this._preventDefault, {passive: false})
          })
        } else {
          eventsList.forEach((item) => {
            window.removeEventListener(item, this._preventDefault)
          })
        }
      },
      setMask (mask) {
        this.modal_mask = !!mask
        return this
      },
      show () {
        this.modal_show = true
        return this
      },
      close () {
        this.modal_show = false
        return this
      },
      _preventDefault (e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      },
    }
  }
</script>