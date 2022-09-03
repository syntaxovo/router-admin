<template>
  <div class="aside-container">
<!-- 左侧列表栏，声明路由链接，在路由占位符中显示 -->
<div class="aside-list">
<ul class="aside-menu">
<li class="menu-item">
<router-link to="/home/user">用户管理</router-link>
</li>
<li class="menu-item">
<router-link to="/home/root">权限管理</router-link>
</li>
<li class="menu-item">
<router-link to="/home/goods">商品管理</router-link>
</li>
<li class="menu-item">
<router-link to="/home/order">订单管理</router-link>
</li>
<li class="menu-item">
<router-link to="/home/setting">系统设置</router-link>
</li>

</ul>
</div>
  </div>
</template>
<script>
export default {
  name: 'MyAside'
}
</script>
<style lang="less" scoped>
.aside-container{
  width: 250px;
  height: 100%;
  border-right: 1px solid #eaeaea;
  .aside-menu{
    list-style: none;
    padding: 0;
    .menu-item{
  line-height: 50px;
  font-weight: bold;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a{
    display: block;
    color: black;
    padding-left: 30px;
&:hover{
  text-decoration: none;
}
  }
}
  }
}
</style>
