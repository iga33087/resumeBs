<template>
  <div class="leftMenu">
    <div class="leftMenuLogo"></div>
    <div class="leftMenuBox">
      <LeftMenuItem v-for="(item,index) in router" :key="index" :data="item"></LeftMenuItem>
    </div>
  </div>
</template>

<script>
import LeftMenuItem from "@/components/LeftMenuItem"

export default {
  components:{LeftMenuItem},
  data() {
    return {
      router:[
        {icon:"el-icon-edit-outline",title:"履歷編輯",name:"resumeEdit",newNum:0,children:[]},
        {icon:"el-icon-tickets",title:"來訪查看",name:"viewList",newNum:this.$store.state.chartList.length,children:[
          {icon:"el-icon-s-order",title:"111",name:"chartList",newNum:0,children:[]},
          {icon:"el-icon-s-order",title:"222",name:"chartList",newNum:0,children:[
            {icon:"el-icon-s-order",title:"222-111",name:"viewList",newNum:0,children:[]},
          ]},
          {icon:"el-icon-s-order",title:"333",name:"chartList",newNum:0,children:[]},
        ]},
        {icon:"el-icon-chat-dot-square",title:"聊天室",name:"chartList",newNum:0,children:[]},
      ]
    }
  },
  methods: {
    online(x) {
      this.$socket.emit("adminOnline",x)
    }
  }
}
</script>