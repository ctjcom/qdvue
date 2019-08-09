<template>
    <div>
    <a href="#" class="btn">
      <span :class="icon"></span>
        {{btnText}}
    </a>
    </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  props:{
    btnText:{
      default:'',
    },
    icon:{
      default:'',
    }
  } 
}
</script>

<style scoped>
.btn {
  font-size: 0.8125rem;
  line-height: 2rem;
  display: block;
  margin: 0.375rem 0.75rem;
  text-align: center;
  color: #969ba3;
  border-radius: 0.25rem;
  background-color: #fff;
}
</style>
