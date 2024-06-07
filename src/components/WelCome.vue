<script setup>
import {useCommonStore} from '@/stores/module/commonStore'
import {onMounted} from "vue"
import {useRouter} from "vue-router"

const commonStore = useCommonStore();
const router = useRouter();
const  goHome = ()=>{
  commonStore.changeShowHome();
  console.log("goHome")
  router.push("/constrained")
}


onMounted(() => {
  console.log(commonStore);
  console.log(commonStore.getShowHome)
  commonStore.changeShowHome()
  console.log(commonStore.showHome)
})

</script>

<template>
  <v-main class="d-flex">
    <v-parallax src="@/assets/sky1.jpg">
      <h2 class="text-h2 d-flex flex-column   justify-center align-center animate__animated  animate__fadeInDown   ga-3  text-white font-italic " style=" position: relative; top: 30%;  height: 100px;">
        Welcome Back <br>
      </h2>
      <div
        class="d-flex flex-column animate__animated  animate__fadeInDown text-white fill-height  justify-center align-center">
        <h4 class="text-h4  font-weight-thin    ">
          从此音尘各悄然，春山如黛草如烟。<br>
          泪添吴苑三更雨，恨惹邮亭一夜眠。<br>
          讵有青鸟缄别句，聊将锦瑟记流年。<br>
          他时脱便微之过，百转千回只自怜。<br>
        </h4>
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
  </v-main>
</template>

<style scoped lang="sass">
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
