<template>
  <div>
    <HeaderBarVue></HeaderBarVue>
    <div class="post-container">
      <post v-for="i in 4"></post>
    </div>
  </div>
</template>
<script setup>
import HeaderBarVue from '../components/HeaderBar.vue';
import Post from '../components/Post.vue';
</script>