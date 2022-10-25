<script setup>
import { ref } from 'vue'
import { useStore } from './../stores/auth'
import Comment from './Comment.vue';

const store = useStore();

const temp = defineProps(['post'])
const post = ref(temp.post)
let commented = ref(false)
let comments = ref([])
let comment = ref('')

const addComment = () => {
  if (!commented.value) {
    commented.value = true
    return
  }
  if (comment.value === '') {
    return
  }
  comments.value.push({
    name: store.name,
    comment: comment.value,
  })
  comment.value = ''
}
const cancelComment = () => {
  commented.value = false
  comment.value = ''
}
</script>
<template>
  <div class="text-while max-sm: bg-gray-300 w-2/4 text-left pl-4 pt-2 relative pb-2">
    <div class="edit" v-if="store.name !== post.author"><button class="text-white absolute right-1 top-1">编辑</button>
    </div>
    <header>
      <div class="user text-opacity-60">
        <span class="">{{ post.author }}</span>
        <span class="ml-1 mr-1">|</span>
        <span class="">{{ post.date }} {{ post.time }}</span>
      </div>
    </header>
    <main class="">
      <h1 class="text-2xl font-semibold mb-3">{{ post.title }}</h1>
      <p class="text-sm">{{ post.content }}</p>
    </main>
    <footer class="comment text-right pr-4">
      <label for="comment" v-if="commented">
        <textarea name="comment" class="w-full" id="comment" cols="70" rows="3" v-model="comment"></textarea>
      </label>
      <button class="text-white mr-4" @click="addComment">评论</button>
      <button class="text-white" @click="cancelComment" v-if="commented">算了</button>
    </footer>
    <div class="right-bar">
      <Comment v-for="c of comments" :name="c.name" :comment="c.comment"></Comment>
    </div>
  </div>
</template>
