<template>
  <div class="register">
    <Card class="register-con">
      <h2>欢迎注册</h2>
      <hr>
      <Form ref="form" :model="formItem" :label-width="80" class="register-in" :rules="ruleValidate" @keydown.enter.native="handelregister(formItem)">
        <FormItem label="用户名" prop="username">
          <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="formItem.password" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="电话" prop="phone">
          <Input v-model="formItem.phone" placeholder="请输入电话号码"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <RadioGroup v-model="formItem.sex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handelregister(formItem)">提交</Button>
          <Button style="margin-left: 8px" @click="clear">取消</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
import { register } from '@/api/user'
    export default {
        name: 'Register',
        props: {
            userNameRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    { type: 'string', max: 20, message: '不能超过20个字符', trigger: 'blur' },
                    { type: 'string', min: 3, message: '不能少于3个字符', trigger: 'blur' },
                    ]
                }
            },
            passwordRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', max: 20, message: '不能超过20个字符', trigger: 'blur' },
                    { type: 'string', min: 3, message: '不能少于3个字符', trigger: 'blur' },
                    ]
                }
            },
            phoneRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string',pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' },
                    ]
                }
            },
            sexRules: {
            type: Array,
            default: () => {
                return [
                    { required: true, message: '请选择性别', trigger: 'change' }
                    ]
                }
            },

        },
        data () {
            return {
                formItem: {
                    username: '',
                    password: '',
                    phone: '',
                    sex: '',
                },
            }
        },
        computed: {
            ruleValidate() {
            return {
                username: this.userNameRules,
                password: this.passwordRules,
                phone: this.phoneRules,
                sex: this.sexRules,
                }
            }
        },
        methods: {
            handelregister({username, password,phone, sex}){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        // console.log(username, password, phone, sex);
                        sex === 'male' ? sex = '0' : sex = '1';
                        register({username,password,phone,sex}).then(res => {
                            if(res.status == 200){
                                this.$Message.success('注册成功');
                                this.$router.push({
                                    name: "login"
                                });
                            }
                        })       
                    } else {
                        this.$Message.error('输入信息不能为空');
                    }
                })
            },
            clear() {
                this.$refs.form.resetFields();
                this.formItem = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            }
        },
    }
</script>
<style scoped>
.register{
    width: 100%;
    background: url('../assets/images/login-bg.jpg');
    background-size: cover;
    overflow: hidden;
    height: 620px;
    position: relative;
}
.register-con{
    width:350px;
    background: #fff;
    position: absolute;
    right: 50px;
    top: 100px;
}
.register-con h2{
    text-align: center;
    height: 40px;
}
.register-in{
    margin-top: 10px;
}
.register-in button{
    margin-left: 60px;
}

</style>
