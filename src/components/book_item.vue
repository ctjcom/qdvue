<template>
  <div class="book">
    <router-link tag="span" :to="`/details/`+id">
    <img class="book-img" :src="imgurl" alt />
    <div>
      <p class="book-title">{{title}}</p>
      <span class="book-writer">{{writer}}</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { constants } from 'crypto';
import { deflate } from 'zlib';
export default {
  props:{
    title:{
      default:'',
    },
    writer:{
      default:'',
    },
    imgurl:{
      default:'',
    },
    id:{
      default:''
    }
  },
};
</script>

<style scoped>
.book {
  width: 4.125rem;
  padding: 0.75rem 0.5rem 0.5rem;
  text-align: left;
}
.book .book-img {
  display: block;
  width: inherit;
  height: 5.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.book .book-title {
  font-size: 0.8125rem;
  line-height: 1.25;
  overflow: hidden;
  max-height: 2.125rem;
  margin: 0.5rem 0 0.125rem;
}
.book .book-writer {
  display: block;
  width:4.125rem;
  color: #969ba3;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
