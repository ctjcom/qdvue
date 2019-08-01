<template>
  <div class="home">
     <Header></Header>
     <navList></navList>
     <bookItem></bookItem>
     <bookListItem></bookListItem>
     <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header'
import Footer from '../components/footer'
import bookItem from '../components/book_item'
import  bookListItem from '../components/book_list_item'
import navList from '../components/nav_list'
export default {
  name: 'home',
  components: {
    Header,
    Footer,
    bookItem,
    bookListItem,
    navList,
  }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
}
</style>
