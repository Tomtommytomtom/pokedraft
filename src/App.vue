<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-content>
      <draft />
    </v-content>
  </v-app>
</template>

<script>
import Draft from './views/Draft'

export default {
  name: 'App',

  components: {
    Draft
  },

  data: () => ({
    //
  })
}
</script>
