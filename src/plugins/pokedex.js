import pokedex from '@/assets/pokedex.json'
import keys from '@/assets/keys.json'

console.log(pokedex)
console.log(keys)

export default {
  install(Vue) {
    Vue.prototype.$getEntrys = () => {
      return pokedex
    }
    Vue.prototype.$getKey = id => {
      return this.keys[`${id}`]
    }
  }
}
