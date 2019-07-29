<template>
  <div class="home">
      <header class="header">
     <a href="#">
       <h1>起点中文网</h1>
     </a>
     <dir>
       <h3><a href="#">男生</a></h3>
       <h3><a href="#">女生</a></h3>
     </dir>
     <div>
       <span class="icon-yonghu"></span>
       <span class="icon-ziyuan"></span>
     </div>
   </header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
}
</style>
