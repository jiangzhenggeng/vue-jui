import CompontentApi from '../../common/CompontentApi'

const _CompontentApi = {
  install (Vue) {
    Vue.prototype['$createAip'] = function (component) {
      return {
        setSingle (single) {
          this.single = single
          return this
        },
        setRoot (root) {
          this.root = root
          return this
        },
        show (options, renderFn) {
          return CompontentApi(Vue, component, this.single, this.root)(options, renderFn)
        }
      }
    }
  }
}

export default _CompontentApi


