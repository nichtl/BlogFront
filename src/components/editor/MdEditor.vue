<script setup>
import {ref, onMounted, unref, computed,watch} from "vue";
import {MdEditor} from 'md-editor-v3';
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
const emit = defineEmits(['update:contentText'])
const emitContent = () => {
  emit('update:contentText', mdContent.value);
};
watch(mdContent,emitContent())
const height = ref(superData.height)

onMounted(() => {
  console.log("content")
  console.log(superData)
  console.log(height.value)
  console.log(unref(superData.parentRef))
})


</script>

<template>
  <MdEditor style="height: 100%" preview v-model="mdContent" :theme="editorTheme"/>
</template>

<style scoped lang="sass">
.dark-mode
  background-color: #333
  color: #fff

</style>
