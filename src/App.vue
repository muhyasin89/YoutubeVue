<template>
  <MainLayout>
    <template #content>
      <router-view />
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout.vue';

export default {
  name: 'App',

  components: {
    MainLayout
  },
  mounted(){
    if(this.$store.state.isAuthenticated == true){
   
      this.$router.push({ name: 'home' });
      
    }else{
      this.$router.push({ name: 'login' });
    }
  }

 
};
</script>
