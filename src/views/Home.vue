<template>
<div class="home-container">
<!-- 头部组件 -->
<Myhead></Myhead>
  <div class="home-main-box">
<!-- 侧边栏组件 -->
<Myaside></Myaside>
<!-- 右侧内容组件，由 路由渲染，侧边栏的不同列表对应不同的内容 -->
    <div class="home-main-body">
      <!--路由占位符  -->
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<script>
import Myhead from '@/components/AboutHome/Myhead.vue'
import Myaside from '@/components/AboutHome/Myaside.vue'
export default {
  name: 'MyHome',
  components: {
    Myhead,
    Myaside
  }
}
</script>
<style lang="less" scoped>
.home-container{
display: flex;
flex-direction: column;
height: 100%;
.home-main-box{
  display: flex;
  height: 100%;
  .home-main-body{
    padding: 15px;
    flex: 1;
  }
}
}
</style>
