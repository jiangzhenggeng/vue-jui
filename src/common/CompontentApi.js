export default function (Vue, Component, single = true, root = null) {
  let singleComponent
  let singleInstance

  return function (options, renderFn) {
    if (single && singleComponent) {
      singleInstance.updateRenderData(options)
      singleInstance.$forceUpdate()
      return singleComponent
    }
    options = typeof options == 'object' ? options : {}
    renderFn = typeof renderFn == 'function' ? renderFn : function () {
      return []
    }
    var _root = root ? (root.$el ? root.$el : root) : null
    singleInstance = new Vue({
      name: 'createComponentApi',
      render (createElement) {
        return createElement(Component, options, renderFn(createElement))
      },
      methods: {
        init () {
          if (_root) {
            _root.appendChild(this.$el)
          } else {
            document.body.appendChild(this.$el)
          }
        },
        destroy () {
          this.$destroy()
          if (_root) {
            _root.removeChild(this.$el)
          } else {
            document.body.removeChild(this.$el)
          }
        }
      }
    })
    singleInstance.updateRenderData = function (data) {
      options = data
    }
    singleInstance.updateRenderData(options)
    singleInstance.$mount()
    singleInstance.init()
    singleComponent = singleInstance.$children[0]
    return singleComponent
  }
}


