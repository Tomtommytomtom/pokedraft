<template>
  <v-select
    v-model="selectedNatureWithInfo"
    :items="selectedNatureArray"
    @change="emit"
  ></v-select>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      selectedNature: this.value,
      natures: [
        'hardy',
        'lonely',
        'brave',
        'adamant',
        'naughty',
        'bold',
        'docile',
        'relaxed',
        'impish',
        'lax',
        'timid',
        'hasty',
        'serious',
        'jolly',
        'naive',
        'modest',
        'mild',
        'quiet',
        'bashful',
        'rash',
        'calm',
        'gentle',
        'sassy',
        'careful',
        'quirky'
      ],
      natureInfo: {
        hardy: {
          inc: 'attack',
          dec: 'attack'
        },
        lonely: {
          inc: 'attack',
          dec: 'defense'
        },
        brave: {
          inc: 'attack',
          dec: 'speed'
        },
        adamant: {
          inc: 'attack',
          dec: 'special-attack'
        },
        naughty: {
          inc: 'attack',
          dec: 'special-defense'
        },
        bold: {
          inc: 'defense',
          dec: 'attack'
        },
        docile: {
          inc: 'defense',
          dec: 'defense'
        },
        relaxed: {
          inc: 'defense',
          dec: 'speed'
        },
        impish: {
          inc: 'defense',
          dec: 'special-attack'
        },
        lax: {
          inc: 'defense',
          dec: 'special-defense'
        },
        timid: {
          inc: 'speed',
          dec: 'attack'
        },
        hasty: {
          inc: 'speed',
          dec: 'defense'
        },
        serious: {
          inc: 'speed',
          dec: 'speed'
        },
        jolly: {
          inc: 'speed',
          dec: 'special-attack'
        },
        naive: {
          inc: 'speed',
          dec: 'special-defense'
        },
        modest: {
          inc: 'special-attack',
          dec: 'attack'
        },
        mild: {
          inc: 'special-attack',
          dec: 'defense'
        },
        quiet: {
          inc: 'special-attack',
          dec: 'speed'
        },
        bashful: {
          inc: 'special-attack',
          dec: 'special-attack'
        },
        rash: {
          inc: 'special-attack',
          dec: 'special-defense'
        },
        calm: {
          inc: 'special-defense',
          dec: 'attack'
        },
        gentle: {
          inc: 'special-defense',
          dec: 'defense'
        },
        sassy: {
          inc: 'special-defense',
          dec: 'speed'
        },
        careful: {
          inc: 'special-defense',
          dec: 'special-attack'
        },
        quirky: {
          inc: 'special-defense',
          dec: 'special-defense'
        }
      }
    }
  },
  computed: {
    selectedNatureWithInfo: {
      get() {
        return this.format(this.selectedNature)
      },
      set(newValue) {
        console.log(newValue.split(' ')[0].toLowerCase())
        this.selectedNature = newValue.split(' ')[0].toLowerCase()
      }
    },
    selectedNatureArray() {
      return this.natures.map(nature => this.format(nature))
    }
  },
  watch: {
    value() {
      this.selectedNature = this.value
    }
  },
  methods: {
    emit() {
      this.$emit('input', this.selectedNature)
    },
    format(nature) {
      const capNature = `${nature.charAt(0).toUpperCase()}${nature.substr(
        1,
        nature.length
      )}`
      const info = this.natureInfo[nature]
      const infoString = `(+${info.inc}, -${info.dec})`
      return `${capNature} ${infoString}`
    }
  }
}
</script>

<style></style>
