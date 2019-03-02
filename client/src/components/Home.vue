<template>
  <v-container>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Accountkit</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="/login"
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-toolbar>
    <h1>{{ message }}</h1>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      message: 'Hello'
    })
  }
</script>

<style>

</style>
