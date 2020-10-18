<template>
  <div class="leftMenu">
    <div class="leftMenuLogo"></div>
    <div class="leftMenuBox">
      <LeftMenuItem v-for="(item,index) in getRouter()" :key="index" :data="item"></LeftMenuItem>
    </div>
  </div>
</template>

<script>
import LeftMenuItem from "@/components/LeftMenuItem"

export default {
  components:{LeftMenuItem},
  data() {
    return {
    }
  },
  methods: {
    online(x) {
      this.$socket.emit("adminOnline",x)
    },
    getRouter() {  //過濾router
      let data=this.$router.options.routes
      data=data.filter(res=>res.path!='/login'&&res.path!="*")
      return data
    }
  }
}
</script>