<template>
<div class="Home-head">
<!-- 左侧logo和标题 -->
<div class="left-container">
<img src="@/assets/heima.png" alt="" class="heima">
<h4 class="left-title">黑马后台管理系统</h4>
</div>
<!-- 右侧按钮区域 -->
<div class="right-container">
<button class="btn" type="button" @click="gologin">退出登录</button>
</div>
</div>
</template>
<script>
export default {
  name: 'MyHead',
  methods: {
    gologin () {
      // 退出并清除token
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.Home-head{
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
border-bottom: soid 1px  gray;
.left-container{
  display: flex;
  align-items: center ;
  justify-content: space-between;
  .heima{
  height: 50px;
}
.left-title{
  line-height: 50px;
  margin-left: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;

}
}
.btn{
    cursor: pointer;
     color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
&:hover{
  background-color: #efefef;
}
  }

border-bottom: solid 1px #eaeaea;
}

</style>
