import Modal from '../modal/modal.vue'

export default {
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
    },
    text: {
      type: String,
      default: '提示信息'
    },
  },
  data () {
    return {
      modal_show: this.visible,
      inner_text: this.text
    }
  },
  components: {
    Modal
  },
  methods: {
    setText (text) {
      this.inner_text = text
      return this
    },
    show (time) {
      this.modal_show = true
      this.__close_timer__ && clearTimeout(this.__close_timer__)
      if (time) {
        this.__close_timer__ = setTimeout(() => {
          this.close()
        }, time)
      }
      return this
    },
    close () {
      this.modal_show = false
      this.__close_timer__ && clearTimeout(this.__close_timer__)
      return this
    }
  }
}