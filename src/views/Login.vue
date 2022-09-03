<template>
  <div class="login-container">
    <div class="login-box">

      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称:</label>
          <input type="text" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off" v-model.trim="username">
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码:</label>
          <input type="password" class="form-control ml-2" id="password" placeholder="请输入登录密码" v-model.trim="password">
        </div>
        <!-- 登录和重置按钮 -->
        <div class="control-btn">
          <button type="button" class="btn btn-secondary mr-2" @click="reset">重置</button>
          <button type="button" class="btn btn-primary" @click="login">登录</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset () {
      // console.log('123s')
      // eslint-disable-next-line no-unused-expressions
      this.username = ''
      this.password = ''
    },
    login () {
      if (this.username === 'admin' && this.password === '1234') {
        // 登录成功，并存储token 格式以Bearer开头
        localStorage.getItem('token', 'Bearer xxxx')
        // 跳转到主页
        this.$router.push('/home')
        alert('登录成功')
      } else {
        alert('登录失败')
      }
    }
  }

}
</script>

<style lang="less" scoped>
.login-container{
  background-color: #35495e;
  height: 100%;
  .login-box{

    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
   transform: translate(-50%,-50%);
   border-radius: 5%;
   .avatar-box{
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
    position: absolute;
    top: -5%;
    left: 50%;
   transform: translate(-50%,-50%);
    .avatar{
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 5.25rem;
    max-width: 100%;
    height: auto;
    }
   }
   .form-login{
position: absolute;
bottom: 0;
padding: 20px;
width: 100%;
box-sizing: border-box;
.form-group{
margin-bottom: 20px;
display: flex;
align-items: center;
.form-control{
  margin-left: 2rem;
  height: calc(1.5em + 0.75rem + 2px);
  flex: 1;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

}
.control-btn{
  position:relative;

.btn-secondary{
  position: absolute;
  right: 50px;
  bottom: -14px;

  cursor: pointer;
margin-right: 10px;
color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}
.btn-primary{
  position: absolute;
  right: 0px;
  bottom: -14px;
  background-color: blue;
  cursor: pointer;
  color: #fff;
}
}

   }
  }
}
</style>
