<template>
  <div class="chartList">
    <ChartBox v-for="(item,index) in chartList" :key="index" :data="item"></ChartBox>
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
  computed: {
    chartList() {
      return this.$store.state.chartList
    }
  },
  created() {
    this.$emit("currentRoute",this.$router.currentRoute)
  },
}
</script>