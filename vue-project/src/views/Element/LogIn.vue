<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="">
        <el-input
          type="text"
          v-model="loginForm.loginName"
          placeholder="手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%; background: #505458; border: none"
          v-on:click="Login()"
          >登录</el-button
        >
      </el-form-item>
      <!-- <el-form-item>
        <el-button
          type="primary"
          style="width: 100%; background: #cac6c6; border: none"
          @click="toRegister"
          >注册</el-button
        >
      </el-form-item> -->
    </el-form>
  </body>
</template>
  
<script>
export default {
  name: "LogIn",
  data() {
    return {
      loginForm: {
        loginName: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      console.log('submit!',this.loginForm);
      this.axios.post("http://localhost:8081/sys-user/login").then((resp) => {
        let data = resp.data;
        if (data.success) {
          this.loginForm = {};
          this.$message({
            message: "登录成功，欢迎进入共享单车数据管理系统",
            type: "success",
          });
          this.$router.push({ path: "/homepage" });
        }
        else{
          this.$message.error('登录失败，请检查是否拥有权限或账号密码是否正确');
        }
      });
    }
    // toRegister() {
    //   this.$router.push({ path: "/operatorregister" });
    // }
  }
};
</script>
  
<style>
#poster {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
  padding: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>