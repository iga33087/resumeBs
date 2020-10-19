<template>
  <div>{{d1.d11}}</div>
</template>

<script>
export default {
  data() {
    return {
      d1:{
        d11:123456789
      }
    }
  },
  created() {
    this.$emit("currentRoute",this.$router.currentRoute)
  }
}
</script>

<style>

</style>