<template>
  <div class="header">
    <div class="headerPath">
      <div class="headerPathBox" v-if="path.matched&&path.matched.length">
        <router-link v-for="(item,index) in path.matched" :key="index" :to="{'path':item.path}">
          <div>{{item.meta.title}}<span v-if="index!=path.matched.length-1"> -> </span></div>
        </router-link>
      </div>
    </div>
    <div class="headerAccount" @click="logout">最高管理員</div>
  </div>
</template>

<script>
export default {
  props:["path"],
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
  methods: {
    logout() {
      let flag=confirm("確定登出?")
      if(!flag) return 0
      localStorage.token=""
      this.$router.push({name:"login"}).catch(err=> {
        return err
      })
    }
  }
}
</script>