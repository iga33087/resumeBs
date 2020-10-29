<template>
  <div class="leftMenu">
    <div class="leftMenuBlack" @click="isOpen=!isOpen" v-if="isOpen"></div>
    <div class="leftMenuOpen">
      <i class="el-icon-s-unfold" @click="isOpen=!isOpen"></i>
    </div>
    <div class="leftMenuLogo"></div>
    <div class="leftMenuBox" :class="{'open':isOpen}">
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
      isOpen:false
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