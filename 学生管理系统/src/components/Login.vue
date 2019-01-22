<template>
 <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
          <div>
              <router-link to="/register">注册</router-link>
          </div>
      </Card>
    </div>
  </div>
</template>
<script>
import loginForm from './Login-form'
import { mapActions } from 'vuex'
import { login } from '@/api/user'

export default {
  name:'Login',
  components: {
    loginForm
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    handleSubmit ({ username, password }) {
        login({ username, password }).then(res => {
          if(res.status == 200){
            this.$router.push('/');
            this.$Message.success('登录成功');
          }     
      })
    }
  }
}
</script>
<style lang="less">
  @import './login.less';
</style>
