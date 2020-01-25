<template>
  <v-container class="d-flex flex-column justify-center align-center">
    <h1>Welcome</h1>
    <p>This is where you initially land</p>
    <v-btn depressed class="primary" :to="{ name: 'draft' }">
      Start the Draft!
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
