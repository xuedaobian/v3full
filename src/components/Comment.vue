<script setup>
const props = defineProps(['name', 'comment'])
</script>

<template>
  <div class=" bg-orange-300 m-1">
    <span>{{ props.name }}:</span>
    <span>{{ props.comment }}</span>
  </div>
</template>