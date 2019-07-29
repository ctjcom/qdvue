<template>
  <div class="ranking-list">
    <div class="title">
        <div>
            <span>排行榜</span>
        </div>
        <div>
            <span>更多</span>
        </div>
    </div>
    <ul class="ranking" @click="taggle">
        <li class="active" data-id="tab1">热销榜</li>
        <li data-id="tab2">风云榜</li>
        <li data-id="tab3">签约榜</li>
        <li data-id="tab4">推荐榜</li>
    </ul>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <h1>面板1</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <h1>面板2</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <h1>面板3</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <h1>面板4</h1>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "tab1"
    };
  },
  methods:{
      taggle(e){
        var li=e.target;
        if(li.nodeName=='LI'){
           this.active=li.dataset.id;
        }
      }
  },
};
</script>
<style scoped>
.ranking-list{
    text-align: center;
}
.ranking-list>.title{
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
}
.ranking{
    display: flex;
    margin: 0;
    padding:0;
    justify-content: center;
    list-style: none;
}
.ranking>li{
    border:1px solid red;
    color: red;
    text-align: center;
    padding: 4px 0;
    width: 80px;
    font-size: 12px;
}
.ranking>li.active{
    background: red;
    color:#fff;
}
.ranking>li:first-child{
   border-radius: 5px 0 0 5px;
}
.ranking>li:last-child{
    border-radius: 0 5px 5px 0;
}
</style>