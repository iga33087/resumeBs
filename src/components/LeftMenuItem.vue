<template>
  <router-link :to="{name:data.name}" class="leftMenuItem" v-if="!data.children.length">  
    <div class="leftMenuItemBox">
      <i class="leftMenuItemBoxIcon" :class="data.meta.icon"></i>
      <div v-if="data.meta&&data.meta.title">{{data.meta.title}}</div>
    </div>
  </router-link>
  <div class="leftMenuItem" v-else @click.stop="isOpen=!isOpen">
    <div class="leftMenuItemBox">
      <i class="leftMenuItemBoxIcon" :class="data.meta.icon"></i>
      <div v-if="data.meta&&data.meta.title">{{data.meta.title}}<span v-if="data.newNum">{{data.newNum}}</span></div>
      <i class="openIcon el-icon-caret-bottom" :class="{'isOpen':isOpen}" v-if="data.children.length"></i>
    </div>
    <div class="leftMenuItemBoxChildren" v-if="data.children.length&&isOpen" @click.stop>
      <LeftMenuItem v-for="(item,index) in data.children" :key="index" :data="item"></LeftMenuItem>
    </div>
  </div>
</template>

<script>
import LeftMenuItem from "@/components/LeftMenuItem"

export default {
  name:"LeftMenuItem",
  props:["data"],
  data() {
    return {
      isOpen:false
    }
  }
}
</script>

<style>

</style>