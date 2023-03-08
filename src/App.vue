<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRootStore } from "./store/root";


onMounted(() => {
  const router = useRouter()
  const root = useRootStore();

  let host = import.meta.env.VITE_BASE_URL

  root.updateHost(host);

  if(root.isAuthenticate === false){
    router.push({'name': 'login'});
  }else{
    router.push({'name': 'home'});
  }
});
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
