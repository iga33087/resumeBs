<template>
  <div>1111111111</div>
</template>

<script>
export default {
  created() {
    this.$emit("currentRoute",this.$router.currentRoute)
  }
}
</script>

<style>

</style>