<template>
  <div class="details">
    <Head></Head>
    <!--书籍详情-->
    <div class="book-details">
      <img class="book-cover" :src="book.images" alt />
      <div class="book-body">
        <h2 class="book-title">{{book.name}}</h2>
        <div class="book-rand">
          <a href>{{book.author}}</a>
          <span class="tag-solid">大神</span>
        </div>
        <div class="book-score">
          <span class="gray">{{book.ratings}}分</span>
        </div>
        <p class="book-meta">{{book.type}}</p>
        <p class="book-meta">
          {{book.wordcount}}万字
          <span></span>{{book.serialize}}
        </p>
      </div>
    </div>
    <!--按钮组-->
    <div class="btn-group">
      <router-link :to="'/read/'+book.id" class="btn warp">免费试读</router-link>
      <a class="btn" href="#">加入书架</a>
      <a class="btn" href="#">VIP订阅</a>
    </div>
    <!--书籍简介-->
    <div class="bookSummary">
      {{book.intro}}
    </div>
    <!--书籍目录-->
    <a href class="book-meta book-status">查看完整目录</a>

    <Footer></Footer>
  </div>
</template>

<script>
import Head from "../components/head" 
import Footer from "../components/footer";

export default {
  data(){
    return{
      book:{},
    }
  },
  created() {
    this.axios.get("/booklist",{params:{id:this.$route.params.id}}).then(res=>{
      this.book=res.data;
    })
  },
  components: {
    Head,
    Footer
  }
};
</script>

<style scoped>
.book-details {
  display: flex;
  padding: 1rem;
  background-color: #f6f7f9;
}
.book-cover {
  width: 5.25rem;
  height: 7rem;
  border-radius: 2px;
  box-shadow: none;
  margin-right: 0.5rem;
}
.book-title {
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 100%;
  margin: 0;
  text-align: left;
}
.book-rand {
  display: flex;
  font-size: 0.8125rem;
}
.book-rand > a {
  color: inherit;
}
.tag-solid {
  transform: scale(0.7);
  display: inline-block;
  padding: 0 0.25em;
  background-color: #ed424b;
  border-radius: 2px;
  color: #fff;
}
.book-score {
  text-align: left;
}
.gray {
  color: #969ba3;
  font-size: 0.75rem;
  line-height: 1.4rem;
}
.book-meta {
  text-align: left;
  line-height: 1.4rem;
  font-size: 0.75rem;
  overflow: hidden;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 1rem;
}
.btn-group > .btn {
  display: block;
  width: calc(100% - 0.6667rem);
  margin-left: 0.3333rem;
  padding: 0;
  color: #33373d;
  font-size: 0.8125rem;
  line-height: 1.875rem;
  text-align: center;
  border-radius: 0.125rem;
  box-shadow: inset 1px 0 #e3e4e6, inset 0 1px #e3e4e6, inset 0 -1px #e3e4e6,
    inset -1px 0 #e3e4e6;
}
.btn-group > .btn:first-child {
  background-color: #ed424b;
  color: #fff;
}
.bookSummary {
  font-size: 0.875rem;
  line-height: 1.5rem;
  position: relative;
  overflow: hidden;
  margin-left: 1rem;
  padding-right: 1rem;
  text-align: justify;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
  fill: currentColor;
}
.book-status {
  background: #fff;
  color: #33373d;
  line-height: 2.55rem;
  font-size: .9rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}
</style>
