<template>
  <div>
    <h1>登录注册</h1>
    <br>
    <label for="name">名称：
      <input type="text" id="name" placeholder="名称" v-model="name">
    </label>
    <br>
    <label for="password">密码：
      <input type="password" id="password" placeholder="密码" v-model="password">
    </label>
    <br>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import { useStore } from '../stores/auth'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const name = ref('')
const password = ref('')
const auth = useStore()
const router = useRouter()
const login = () => {
  if (name.value === '' || password.value === '') {
    alert('请输入用户名和密码')
    return
  }
  const data = {
    name: name.value,
    password: password.value
  }
  // 发起网络请求
  axios.post('http://localhost:8081/login', data).then(res => {
    console.log(res)
  })
  auth.setToken('123')
  auth.setUser(data)
  router.push('/')
}
</script>