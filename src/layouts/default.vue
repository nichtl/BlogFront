<script setup lang="ts">
import { ref, onMounted } from 'vue';

const lastScrollTop = ref(0); // 记录上一次滚动的位置
const headerTop = ref('0'); // 初始化页眉的 top 值
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const headerRef = ref()
const handleScroll = () => {
  console.log("handle scroll")
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > lastScrollTop.value) {
    // 向下滚动时隐藏页眉
    headerTop.value = '-100px';
  } else {
    // 向上滚动时显示页眉
    headerTop.value = '0';
  }
  lastScrollTop.value = currentScrollTop;
};
</script>

<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row class="row">
        <v-col cols="12" ref="headerRef" :style="{ top: headerTop }"  class="header"   >
          <!-- 页眉部分 -->
          <AppHeader/>
        </v-col>
        <v-col cols="12" class="main">
          <!-- 中间内容部分 -->
          <router-view></router-view>
        </v-col>
        <v-col cols="12" class="footer" >
          <!-- 页脚部分 -->
          <AppFooter  />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
<!--  <v-app id="inspire">-->
<!--    <v-container>-->
<!--      <v-row height="20%">-->
<!--        <v-col cols="4">-->
<!--          <AppHeader class="header" />-->
<!--        </v-col>-->
<!--        <v-col cols="8" class="main">-->
<!--          <router-view></router-view>-->
<!--        </v-col>-->
<!--        <v-col cols="4">-->
<!--          <AppFooter class="footer" />-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--  </v-app>-->
</template>
<style scoped lang="sass">

.row
  flex: 1
.header
  flex: 20%
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 999 // 设置较高的 z-index 值以确保页眉始终位于顶部
.main
  margin-top: 2%
  flex: 80%
.footer
  flex: 20%
  position: fixed
  bottom: 0
  left: 0
  right: 0
  z-index: 999 // 设置较高的 z-index 值以确保页脚始终位于底部
</style>
<script setup lang="ts">
</script>
