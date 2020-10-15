<template>
  <div id="app">
    <Loading v-if="$store.state.loading"></Loading>
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
import Loading from "@/components/Loading"
import Header from "@/components/Header"
import LeftMenu from "@/components/LeftMenu"

export default {
  components:{Loading,Header,LeftMenu},
  sockets: {
    getChartList(data) {
      this.$store.dispatch("chartList",data)
    }
  },
  methods: {
    online(x) {
      this.$socket.emit("adminOnline",x)
    }
  }
}
</script>
