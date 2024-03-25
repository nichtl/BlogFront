<template>
  <v-app id="inspire">

    <AppHeader/>
      <v-main >
          <v-sheet
            min-height="70vh"
            rounded="lg"
          >
              <router-view></router-view>
          </v-sheet>
      </v-main>
    <AppFooter />
  </v-app>
</template>

