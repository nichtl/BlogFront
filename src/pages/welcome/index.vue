<script setup>
import {useCommonStore} from '@/stores/commonStore'
import {ref,onMounted,onBeforeMount} from "vue"
import {useRouter} from "vue-router"
import {load} from "jinrishici"

  const commonStore = useCommonStore();
  const router = useRouter();

  let isHidden = ref(false);

  const  goHome = ()=>{
  commonStore.changeShowHome();
  isHidden.value = true;
  setTimeout(()=>{  router.push("/constrained")
  },500)
}


onBeforeMount(()=>{
  isHidden.value = false
})

onMounted(() => {
  load( result =>{console.log(result)});  console.log(router.currentRoute)
  console.log(commonStore);
  console.log(commonStore.getShowHome)
  commonStore.changeShowHome()
  console.log(commonStore.showHome)
})

</script>

<template>
  <transition name="fade" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
    <v-parallax  src="@/assets/sky1.jpg">
<!--    <v-parallax src="https://picsum.photos/1920/1080?random">-->
      <h2 class="text-h2 text-lg-h3 d-flex flex-column   justify-center align-center animate__animated  animate__fadeInDown   ga-3  text-white font-italic " style=" position: relative; top: 30%;  height: 100px;">
        Welcome Back <br>
      </h2>
      <div
        class="d-flex flex-column animate__animated  animate__fadeInDown text-white fill-height  justify-center align-center">
        <h4 class="text-h4  text-lg-h4 font-weight-thin    ">
          <p> 从此音尘各悄然，春山如黛草如烟。</p>
          <p> 泪添吴苑三更雨，恨惹邮亭一夜眠。</p>
          <p> 讵有青鸟缄别句，聊将锦瑟记流年。</p>
          <p> 他时脱便微之过，百转千回只自怜。</p>
<!--          昨夜星辰昨夜风，画楼西畔桂堂东。-->
<!--          身无彩凤双飞翼，心有灵犀一点通。-->
<!--          隔座送钩春酒暖，分曹射覆蜡灯红。-->
<!--          嗟余听鼓应官去，走马兰台类转蓬。-->
<!--        </h4>-->
        <h3 class="subheading text-white">
          感旧四首·其四 黄景仁〔清代〕
        </h3>
      </div>
      <div class="d-flex flex-column mdi-format-line-height justify-end align-center text-white"
           style="position: absolute; bottom: 0; width: 100%;">
        <v-col cols="auto">
          <v-btn  class="show" icon="$vuetify" variant="outlined" size="x-large"
                  @click="goHome()"></v-btn>
        </v-col>
      </div>
    </v-parallax>
  </transition>
</template>

<style scoped lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity 0.8s

.fade-enter, .fade-leave-to
  opacity: 0

@mixin bounce-animation
  @keyframes bounce
    0%, 20%, 50%, 80%, 100%
      transform: translateY(0)
    40%, 60%
      transform: translateY(-30px)

.v-btn
  &.show
    transition: transform 0.5s
    &:hover
      animation-name: bounce
      animation-duration: 1s
      animation-fill-mode: forwards
    @include bounce-animation
</style>

<route lang="yaml">
 meta:
   layout: empty
</route>
