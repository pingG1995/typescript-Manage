<template>
 <div class="password">
      <login-header>
        <el-form 
        slot="container"
        label-position="left"
        label-width="0px"
        :model="ruleForm" 
        :rules="rules" 
        ref='ruleForm' >
          <div class="title">
            <h3>找回密码</h3>
          </div>
          <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>

        <!-- email -->
        <el-form-item prop="email">
          <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="邮箱">
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>

          <!-- email -->
        <el-form-item>
          <el-button 
          :loading="isLogin"
           type="primary" 
           style="width:100%"
           @click.native.prevent="handleSubmit"
           >
           确定
          </el-button>
        </el-form-item>
        </el-form>
      </login-header>
  </div>
</template>

<script lang="ts">
import  {Component,Vue,Provide} from 'vue-property-decorator' 
import LoginHeader from './LoginHeader.vue';

@Component({
    components:{
      LoginHeader
    }
})

export default class Password extends Vue {
  @Provide() isLogin:boolean=false;

 // 表单提交信息
  @Provide() ruleForm:{username:string,email:string}={
    username:'',
    email:''
  };

 @Provide() rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      {
        required: true,
        message: "请输入邮箱地址",
        trigger: "blur"
      },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: "blur,change"
      }
    ]
  };

  handleSubmit():void {
    (this.$refs["ruleForm"] as any).validate((valid:boolean)=>{
      if(valid) {
          this.isLogin=true;
          (this as any).$axios.post("/api/users/login",this.ruleForm)
          .then((res:any)=>{
            this.isLogin=false;
            localStorage.setItem("tsToken", res.data.token);
            this.$message({
              message:res.data.msg,
              type:'success'
            })
            this.$router.push({path:'/login'});
          }).catch((res:any)=>{
            this.isLogin=false;
          })
      }
    })
  }


}
</script>

<style>

</style>