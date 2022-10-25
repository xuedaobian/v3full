<script setup>
import { ref } from 'vue'
import { useStore } from './../stores/auth'

let title = ref('')
let content = ref('')
let date = ref('')
let time = ref('')
const store = useStore();
const author = store.name;

const emit = defineEmits(['addPost'])

const addPost = () => {
  if (title.value === '' || content.value === '') {
    return
  }
  date.value = new Date().toLocaleDateString()
  time.value = new Date().toLocaleTimeString()
  emit('addPost', {
    title: title.value,
    content: content.value,
    date: date.value,
    time: time.value,
    author,
  })
  title.value = ''
  content.value = ''
}
</script>

<template>
  <div class=" bg-blue-300 text-left pl-4 pr-4 w-1/4 pb-2 pt-1 fixed right-8 top-16">
    <span class="block text-xl">发布我的帖子</span>
    <label for="post-title" class="block mb-4 mt-1">
      <input type="text" class="w-full" id="post-title" v-model="title" placeholder="标题">
    </label>
    <label for="post-content" class="block">
      <textarea id="post-content" class="w-full" v-model="content" placeholder="内容"></textarea>
    </label>
    <button @click="addPost" class="text-white">发布</button>
  </div>
</template>