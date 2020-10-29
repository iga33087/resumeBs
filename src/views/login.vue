<template>
  <div class="login">
    <el-form label-width="60px">
      <el-form-item label="帳號">
        <el-input v-model="form.account" @keyup.enter.native="sub"></el-input>
      </el-form-item>
      <el-form-item label="密碼">
        <el-input v-model="form.password" @keyup.enter.native="sub" show-password></el-input>
      </el-form-item>
      <div class="buttonList">
        <el-button type="primary" @click="sub" style="width:100%;">登入</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account:"",
        password:""
      }
    }
  },
  async created() {
    this.$emit("currentRoute",this.$router.currentRoute)
  },
  methods: {
    async sub() {
      this.$store.dispatch("loading",true)
      await this.$api.login(this.form).then(res=> {
        if(res=="帳號或密碼錯誤") {
          alert(res)
        }
        else {
          localStorage.token=res
          this.$router.push({name:"viewList"})
        }
      })
      this.$store.dispatch("loading",false)
    }
  }
}
</script>