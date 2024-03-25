<script setup>
import {useTheme} from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// eslint-disable-next-line no-undef
const links =  [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates'];
</script>

<template>
  <v-app-bar    scroll-behavior="hide fade-image collapse"
                image="https://picsum.photos/1920/1080?random">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>Nicht</v-app-bar-nav-icon>
    </template>

    <v-container fluid class=" mx-auto d-flex align-center justify-center">

      <v-avatar
        class="me-4 "
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <v-btn @click="toggleTheme"
             text="Theme"
             variant="text" >Theme</v-btn>

      <v-btn
        to="/tools"
        text="tools"
        variant="text"

      ></v-btn>

      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>

    </v-container>
  </v-app-bar>
</template>

<style scoped lang="sass">

</style>
