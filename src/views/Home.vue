<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="post-container relative text-center">
      <post v-for="post of posts" class="mt-1 ml-auto mr-auto" :post="post"></post>
    </div>
    <AddPost @add-post="addPost"></AddPost>
  </div>
</template>
<script setup>
import HeaderBar from '../components/HeaderBar.vue';
import Post from '../components/Post.vue';
import AddPost from '../components/AddPost.vue';
import getPosts from './../api/api';
import { ref } from 'vue';

const posts = ref([]);

const addPost = (post) => {
  posts.value.push(post);
}
</script>