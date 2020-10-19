<template>
  <div class="chartBox">
    <div class="chartBoxTitle" @click="changeOpen">
      <div class="chartBoxTitleText">{{data.id}} ({{data.ip}})</div>
      <div class="chartBoxTitleIconsBox">
        <div class="chartBoxTitleIconsBoxNewCount" v-if="newCount" @click="changeOpen">{{newCount}}</div>
        <i class="chartBoxTitleIconsBoxItem" :class="isOpen ? 'el-icon-minus' : 'el-icon-full-screen'" @click.stop="changeOpen"></i>
      </div>
    </div>
    <div class="chartBoxContent" ref="chartBoxContent" v-if="isOpen">
      <div class="chartBoxContentItem" v-for="(item,index) in history" :key="index" :class="{'opposite':item.opposite}">
        <div class="chartBoxContentItemTime">{{$global.YYYYMMDDHHmm(item.time)}}</div>
        <div class="chartBoxContentItemContent">{{item.content}}</div>
      </div>
    </div>
    <div class="chartBoxButtonList" v-if="isOpen">
      <input type="text" class="chartBoxButtonListInput" v-model="msg" @keyup.enter="sub">
      <div class="chartBoxButtonListSub" @click="sub">送出</div>
    </div>
  </div>
</template>

<script>
export default {
  props:["data"],
  data() {
    return {
      msg:"",
      isOpen:false,
      history:[],
      newCount:0
    }
  },
  created() {
    this.sockets.subscribe(this.data.id,(data)=> {
      //console.log(data)
      this.history.push(data)
      this.$nextTick(()=> {
        if(!this.isOpen) {
          this.newCount++
        }
        else {
          this.$refs.chartBoxContent.scrollTop=9999999
        }
      })
    })
  },
  methods: {
    changeOpen() {
      this.isOpen=!this.isOpen
      this.$nextTick(()=> {
        if(this.isOpen&&this.$refs.chartBoxContent) {
          this.newCount=0
          //this.$refs.chartBoxContent.scrollTop=9999999
        }
      })
    },
    sub() {
      if(!this.msg) return 0
      let data={id:this.data.id,msg:this.msg,opposite:true}
      this.$socket.emit("postMsg",data)
      this.msg=""
    }
  }
}
</script>