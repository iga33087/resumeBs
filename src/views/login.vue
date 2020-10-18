<template>
  <div class="login">
    <el-form label-width="60px">
      <el-form-item label="帳號">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密碼">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="sub">登入</el-button>
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
        localStorage.token=res
        this.$router.push({name:"viewList"})
      })
      this.$store.dispatch("loading",false)
    }
  }
}
</script>