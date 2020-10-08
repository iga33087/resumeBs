<template>
  <div class="leftMenu">
    <div class="leftMenuLogo"></div>
    <div class="leftMenuBox">
      <div class="leftMenuBoxItem">履歷編輯</div>
      <div class="leftMenuBoxItem">來訪查看{{this.$store.state.chartList.length}}</div>
      <div class="leftMenuBoxItem">聊天室</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    online(x) {
      this.$socket.emit("adminOnline",x)
    }
  }
}
</script>