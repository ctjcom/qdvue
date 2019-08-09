<template>
  <div class="home">
    <Header></Header>
    <!--首页轮播-->
    <div id="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <div>
            <img
              class="swipe-img"
              :src="require(`../../public/img/428226d082b615b86ea28fe6cbd04c8a.jpg`)"
              alt
            />
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div>
            <img
              class="swipe-img"
              :src="require(`../../public/img/688661dde98949b4bcfe05060dd43bae.jpg`)"
              alt
            />
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div>
            <img
              class="swipe-img"
              :src="require(`../../public/img/a75c95a54df3bc938989820ddc8f11aa.jpg`)"
              alt
            />
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--搜索按钮-->
    
    <navList></navList>
    <boxTitle title="热门小说" desc="起点编辑推荐"></boxTitle>
    <bookSolidList :type="`玄幻`"></bookSolidList>
    <boxTitle title="新书抢先" desc="24小时热销新书"></boxTitle>
    <bookListItem></bookListItem>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header";
import Footer from "../components/footer";
import bookSolidList from "../components/book_solid_list";
import bookListItem from "../components/book_list_item";
import navList from "../components/nav_list";
import boxTitle from "../components/box_title";
export default {
  name: "home",
  components: {
    Header,
    Footer,
    bookSolidList,
    bookListItem,
    navList,
    boxTitle
  }
};
</script>

<style scoped>
#swipe {
  box-sizing: border-box;
  padding: 0 0.75rem;
  overflow: hidden;
  width: 100%;
  height: calc(0.314 * (100vw - 1.5rem));
}
.swipe-img {
  width: 100%;
  height: calc(100% + 25.1897%);
}
/*重写mintui样式*/
#swipe >>> .mint-swipe-indicator {
  background: #fff;
  opacity: 1;
}
#swipe >>> .mint-swipe-indicator.is-active {
  background: red;
}
</style>
