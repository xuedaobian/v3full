<script setup>
import { ref } from 'vue'
let title = ref('Hello World')
let content = ref('This is a post')
let date = ref('2021-01-01')
let time = ref('12:00')
let created = ref('user')

</script>
<template>
  <div class="text-while max-sm:">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <p>{{ date }} {{ time }}</p>
    <p>Created by {{ created }}</p>
  </div>
</template>