<template>
  <div class="home">
     <Header></Header>
     <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header'
import Footer from '../components/footer'
export default {
  name: 'home',
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
}
</style>
