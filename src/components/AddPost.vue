<script setup>
import { ref } from 'vue'
import { useStore } from './../stores/auth'
import post from './../api/api'

let title = ref('')
let content = ref('')
let date = ref('')
let time = ref('')
const store = useStore();
const author = store.name;

const emit = defineEmits(['addPost'])

const addPost = () => {
  date.value = new Date().toLocaleDateString()
  time.value = new Date().toLocaleTimeString()
  // post('/api/addPost', {
  //   title: title.value,
  //   content: content.value,
  //   date: date.value,
  //   time: time.value,
  //   author,
  // }, 'POST')
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
  <div>
    <label for="post-title block">
      <input type="text" id="post-title" v-model="title" placeholder="标题">
    </label>
    <label for="post-content block">
      <textarea id="post-content" v-model="content" placeholder="内容"></textarea>
    </label>
    <button @click="addPost" class="text-white">发布</button>
  </div>
</template>