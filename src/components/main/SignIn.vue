<template>
  <div class="w-100" style="height:100vh; background-color:rgba(186, 188, 189, 0.08);">
    <header class="bg-white d-flex flex-column align-items-center">
      <i class="bi bi-google fs-1 fw-bolder"></i>
      <p class="fw-bolder fs-1">欢迎登陆</p>
    </header>
    <div class="d-flex flex-column align-items-center " style="margin:1rem ">
      <div class="row">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="手机号码" />
        </div>
        <div class="input-group">
          <input type=" password" class="form-control" placeholder="验证码" />
          <a class="input-group-text btn btn-primary" type=" button">获取验证码</a>
        </div>
      </div>

      <div class="row">
        <div class="input-group">
          <input type=" checkbox" class="form-check-input" name id value />
          <label for class="form-label fs-6 fw-lighter">登陆即代表同意使用协议</label>
        </div>
      </div>

      <div class="row">
        <button class="btn btn-primary">登陆</button>
        <label class="fw-light d-flex justify-content-center align-items-center">第三方登录</label>
        <button class="btn btn-outline-success text-success">
          <i class="bi bi-whatsapp"></i> 微信登陆
        </button>
        <button class="btn btn-outline-danger text-danger">
          <i class="bi bi-telegram"></i> 微博登陆
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'SignIn'
})
</script>

<style scoped>
header{
  padding-top: 2rem;
}

.input-group{
  margin-top: 1rem;  
}


button{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
div.flex-column {
padding-top: 1rem;
}

div.row:nth-child(2) {
width: 100%;
}

div.row:nth-child(2) > div:nth-child(1) {
padding: 0;
}


div.row:nth-child(3) {
margin: .1rem;
}
</style>