<template>
    <div class="header">
        <a href="#"><h1>起点中文网</h1></a>
        <div class="channel">
            <a href="#" class="man">男生</a>
            <a href="#" class="woman">女生</a>
        </div>
        <div class="header-right">
            <div class="span1">
                <span></span>
                <span></span>
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
}
.header h1{
    font-size: 24px;
    color: #000;
    margin: 0;
    padding: 0;
}
.header>.channel{
    display: flex;
    justify-content: center;
}
.header>.channel>a{
     display: block;
     border: 1px solid red;
     text-decoration: none;
     padding: 3px 10px;
}
.header>.channel>.man{
    background: red;
    color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.header>.channel>.woman{
    background:#fff;
    color:red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.header>.header-right>.span1>span{
    color:red;
}
</style>
