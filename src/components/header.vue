<template>
    <div class="header">
        <a class="logo-a" href="#"><h1 class="logo">起点中文网</h1></a>
        <div class="channel">
            <a href="#" class="man">男生</a>
            <a href="#" class="woman">女生</a>
        </div>
        <div class="header-right">
            <div class="span1">
                <router-link to="/login" class="icon">
                    <span class="iconfont icon-yonghu"></span>
                </router-link>
                <a href="#" class="icon">
                    <span class="iconfont icon-ziyuan"></span>
                </a>
            </div>
            
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    height: 2.75rem;
    padding-top: .6875rem;
    padding-bottom: .625rem;
}
.header .logo-a{
    width: 5.625rem;
    padding: 0 1rem;
}
.header .logo{
    font-size: 1rem;
    width: inherit;
    height: 1.125rem;
    margin: auto;
    color: transparent;
    background: url('../../public/img/logo-qdm.02fc8.svg') no-repeat center;
    background-size: 100%;
}
.header>.channel{
    display: flex;
    justify-content: center;
}
.header>.channel>a{
     display: block;
     font-size: .8125rem;
     border: 1px solid #ed424b;
     text-decoration: none;
     line-height: 1.5rem;
     padding: 0 .75rem;
}
.header>.channel>.man{
    background: #ed424b;
    color: #fff;
    border-radius: 4px 0 0 4px;
}
.header>.channel>.woman{
    background:#fff;
    color:#ed424b;
    border-radius: 0 4px 4px 0;
}
.header>.header-right>.span1 .icon{
    display: block;
    width: 2.25rem;
    height: 2.25rem;
    color:#ed424b;
}
.header>.header-right>.span1{
    display: flex;
    justify-content: center;
}
</style>
