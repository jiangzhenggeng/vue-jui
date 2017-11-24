import {
  Dialog,
  Loading,
  Toast
} from '../../components/dialog/index'
import CompontentApi from '../../common/CompontentApi'

const _Dialog = {
  install (Vue) {
    ;[
      Dialog,
      Loading,
      Toast
    ].forEach(Compontent => {
      Vue.prototype[Compontent.name] = CompontentApi(Vue, Compontent)
      Vue.component(Compontent.name, Compontent)
    })
  }
}

export default _Dialog


