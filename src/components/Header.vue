<template>
  <div class="header">
    <div class="headerLogo">履歷後台</div>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
      this.$socket.emit("adminOnline",true)
    },
    disconnect() {
      this.$socket.emit("adminOnline",false)
    },
    getAdminOnline(data) {
      this.isOnline=data
    },
  },
  created() {
    window.addEventListener('beforeunload', ()=> {
      this.$socket.emit("adminOnline",false)
    })
  }, 
}
</script>