<template>
  <div class="login-wrap">
    <div class="ms-title">实训后台管理系统</div>
    <div class="ms-login">
      <el-form label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" :label-position="labelPosition">
        <el-form-item label="账号" prop="userid">
          <el-input v-model="ruleForm.userid" placeholder="您的手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 请填写账号和密码。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    data () {
      return {
        labelPosition: 'top',
        ruleForm: {
          userid: '',
          password: ''
        },
        rules: {
          userid: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
            localStorage.setItem('ms_username', this.ruleForm.userid)
            // axios.get('https://www.baidu.com').then((res) => {
            //   console.log(res)
            //   alert(res)
            // })
            this.$router.push('/home')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
