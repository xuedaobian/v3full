<script setup>
import { useStore } from './../stores/auth'
import { useRouter } from 'vue-router';

const store = useStore();
const name = store.name;
const router = useRouter();

const logout = () => {
  store.logout();
  router.push('/login-register');
}
</script>

<template>
  <div class="w-full bg-black text-white">
    <span>
      {{ name || '未登录' }}
    </span>
    <button v-if="name" @click="logout">退出</button>
  </div>
</template>

<style scoped>

</style>