<script setup>
import {ref, onMounted, unref, computed,watch} from "vue";
import {MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {useTheme} from 'vuetify'

const theme = useTheme()
const editorTheme = computed(() => theme.global.current.value.dark ? 'dark' : 'light')
const superData = defineProps({
  contentText: {
    type: String,
    default: ''
  }
})
const mdContent = ref(superData.contentText);


</script>

<template>
  <MdPreview style="height: 100%; " :modelValue="mdContent" :theme="editorTheme" />
<!--  <MdEditor style="height: 100%" preview v-model="mdContent" :theme="editorTheme"/>-->
</template>

<style scoped lang="sass">
.dark-mode
  background-color: #333
  color: #fff

</style>
