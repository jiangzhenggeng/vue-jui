import {
  Modal,
  Dialog,
  CreateApi
} from './module'

function install (Vue) {
  if (install.installed) {
    return
  }
  const components = [
    Modal,
    Dialog,
    CreateApi
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const Components = {
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Components
