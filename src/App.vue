<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';

import {onMounted} from "vue";
onMounted(() => {
  console.log(useRouter().getRoutes())
})
</script>
