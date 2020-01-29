import pokedex from '@/assets/pokedex.json'
import keys from '@/assets/keys.json'

export default {
  install(Vue) {
    Vue.prototype.$getEntrys = () => {
      return pokedex
    }
    Vue.prototype.$getKey = id => {
      return keys[`${id}`]
    }
    Vue.prototype.$draftSix = () => {
      return
    }
  }
}
