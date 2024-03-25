<script setup>

</script>

<template>
  <v-toolbar
    dense
    floating>
    <v-btn>
        <v-toolbar-title>
          <v-icon icon="$vuetify"></v-icon>
          Nicht
        </v-toolbar-title>
    </v-btn>

    <v-text-field
      append-icon="mdi-magnify"
      hide-details
      single-line
    ></v-text-field>

    <v-btn icon>
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped lang="sass">

</style>
