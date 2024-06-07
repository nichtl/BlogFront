<script setup>
import {ref, onMounted} from "vue";
import MdPreview from "@/components/editor/MdPreview.vue";

const rail = ref(true)
const drawer = ref(true)

const mainRef = ref(); // 创建对v-main元素的引用
const mainRefHight = ref('')
const selficon = 'mdi-star';
const submitBlog = (text) => {
  console.log(text)
}

onMounted(() => {
  mainRefHight.value = mainRef.value.$el.clientHeight + 'px'
})
let blogText = ref("");

const text = "\n" +
  "### 抽离重复的共性逻辑 减少无效查询\n" +
  "\n" +
  "1 活动校验节点的复用 有一些节点校验结果是 可以进行复用的 需要引入缓存逻辑 并对节点进行逻辑修改 目前节点大概 53 个活动校验节点的复用 有一些节点校验结果是 可以进行复用的 需要引入缓存逻辑 并对节点进行逻辑修改 目前节点大概 53 个活动校验节点的复用 有一些节点校验结果是 可以进行复用的 需要引入缓存逻辑 并对节点进行逻辑修改 目前节点大概 53 个\n" +
  "需要对每个节点的逻辑查看验证并改动\n" +
  "大概得4/d\n" +
  "\n" +
  "-  1-1 暂时只改共性的节点 对其做缓存 这块改完 会影响到现在校验流程 需要做测试\n" +
  "-  1-2 个性化校验 实时校验的 不做修改 仍然保持现状\n" +
  "\n" +
  "\n" +
  "2 由于pmf是对一些共性功能进行抽象封装且抽象方法逻辑 不能适应批量校验的逻辑 需要改抽象框架 新增批量校验抽象方法\n" +
  "并参照老的单请求校验抽象方法 做修改 支持批量校验 2/d\n" +
  "\n" +
  " 问题\n" +
  " -   1.如果加上缓存后不知道会对目前流程有什么事影响 导致 数据有问题导致判断有误 后续需要测试进行验证 至少2/d\n" +
  " -   2. pmf这边是否需要单独开一个接口 还是 在老的接口上做改动 如果再老的的接口改动 还需要 改老的业务逻辑";
blogText.value = text + text
</script>
<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <v-navigation-drawer
            rail
            v-model="drawer"
          >
            <v-list-item
              nav
            >
              <v-avatar
                class="d-block text-center mx-auto mt-4"
                size="36">
                <v-img
                  alt="John"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                ></v-img>
              </v-avatar>
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
              <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
              <v-list-item :prepend-icon="selficon" title="Starred" value="starred"></v-list-item>
            </v-list>

          </v-navigation-drawer>
        </v-col>
        <v-col cols="10">
          <v-main ref="mainRef">
            <!--        <md-editor  :content-text="blogText" @submit="submitBlog"></md-editor>-->
            <md-preview :content-text="blogText"></md-preview>
          </v-main>
        </v-col>
        <v-col cols="1">
          <v-navigation-drawer location="right">
            <v-list>
              <v-list-item
                v-for="n in 5"
                :key="n"
                :title="`Item ${ n }`"
                link
              ></v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
