<template>
  <div class="chartList">
    <ChartBox v-for="(item,index) in list" :key="index" :data="item"></ChartBox>
  </div>
</template>

<script>
import ChartBox from "@/components/ChartBox"

export default {
  components:{ChartBox},
  data() {
    return {
      msg:"",
      list:[]
    }
  },
  sockets: {
    /*getAllMsg(data) {
      this.list.push(data)
      console.log(data)
      console.log(this.getIdList)
    },*/
    getChartList(data) {
      this.list=data
    }
  },
}
</script>