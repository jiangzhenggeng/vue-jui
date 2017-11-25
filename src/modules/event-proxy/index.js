import EventProxy from '../../common/EventProxy'

const _EventProxy = {
  install (Vue) {
    Vue.prototype['$eventProxy'] = function () {
      return EventProxy(...arguments)
    }
  }
}

export default _EventProxy


