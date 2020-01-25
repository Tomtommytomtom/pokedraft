<template>
  <v-select
    v-model="itemText"
    :items="items"
    :item-text="name"
    label="held item"
    @input="swapItems"
  ></v-select>
</template>

<script>
import { bus } from '@/main.js'

export default {
  props: {
    index: {
      type: Number
    },
    itemArray: {
      type: Array
    }
  },
  data() {
    return {
      item: this.itemArray[this.index],
      items: this.itemArray
    }
  },
  computed: {
    itemText: {
      get() {
        return `${this.itemArray[this.index].item.item.name} ${this.index}`
      },
      set(newValue) {
        console.log(newValue, 'this new item was picked')
        const index = newValue.split(' ')
        this.item = this.itemArray[index]
      }
    }
  },
  watch: {
    index() {
      console.log(this.index)
      this.item = this.itemArray[this.index]
    },
    itemArray() {
      this.items = this.itemArray
      console.log('heheh i changed', this.itemArray, this.index)
    }
  },
  created() {
    console.log(
      this.index,
      this.itemArray,
      this.itemArray[this.index].item.item.name
    )
  },
  methods: {
    swapItems(arg) {
      const pokemonToStealFrom = arg.split(' ')[1]
      const pokemonToGiveTo = this.index
      bus.$emit('swap-items', {
        pokemonToStealFrom,
        pokemonToGiveTo
      })
    },
    name(item) {
      return `${item.item.item.name} ${item.index}`
    }
  }
}
</script>

<style></style>
