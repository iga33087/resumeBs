<template>
  <div id="app">
    <LeftMenu></LeftMenu>
    <div class="content">
      <Header></Header>
      <div class="routerView">
        <router-view/>
      </div>
    </div>
    <!--<button @click="online(true)">online</button>
    <button @click="online(false)">offline</button>-->
  </div>
</template>

<script>
import Header from "@/components/Header"
import LeftMenu from "@/components/LeftMenu"

export default {
  components:{Header,LeftMenu},
  sockets: {
    getChartList(data) {
      this.$store.dispatch("chartList",data)
      console.log(22,this.$store.state.chartList)
    }
  },
  methods: {
    online(x) {
      this.$socket.emit("adminOnline",x)
    }
  }
}
</script>
