<template>
  <div class="pageMenu">
    <div class="pageMenuSearch" v-if="showSearch">
      <el-input class="pageMenuSearchInput" v-model="key" @keyup.enter.native="search"></el-input>
      <el-button type="primary" @click="search" @keyup.enter="search">搜尋</el-button>
    </div>
    <el-button type="danger" @click="batchDelete" @keyup.enter="batchDelete" v-if="showBatchDelete">批量刪除</el-button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key:""
    }
  },
  props: {
    showSearch: {
      type:Boolean,
      default:true
    },
    showBatchDelete: {
      type:Boolean,
      default:true
    }
  },
  methods: {
    search() {
      this.$emit("search",this.key)
    },
    batchDelete() {
      this.$emit("batchDelete") 
    }
  }
}
</script>