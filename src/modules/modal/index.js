import Modal from '../../components/modal/modal.vue'
import CompontentApi from '../../common/CompontentApi'

Modal.install = function (Vue) {
  Vue.prototype[Modal.name] = CompontentApi(Vue, Modal)
  Vue.component(Modal.name, Modal)
}

export default Modal


