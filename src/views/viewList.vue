<template>
  <div class="viewList">
    <PageMenu @search="search" @batchDelete="batchDelete"></PageMenu>
    <el-table :data="list" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="ip" label="IP"></el-table-column>
      <el-table-column prop="country" label="國家"></el-table-column>
      <el-table-column prop="time" label="建立時間"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="goRight">
            <el-button type="danger" @click="del(scope.row.id)">刪除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import PageMenu from "@/components/PageMenu"

export default {
  components:{PageMenu},
  data() {
    return {
      list:[],
      handleSelectionChangeArr:[]
    }
  },
  async created() {
    this.$emit("currentRoute",this.$router.currentRoute)
    this.$store.dispatch("loading",true)
    await this.getData()
    this.$store.dispatch("loading",false)
  },
  methods: {
    async getData() {
      this.list=await this.$api.getViewList()
    },
    async del(x) {
      this.$store.dispatch("loading",true)
      let flag=await this.$api.deleteViewList(x)
      if(flag=="token invalid") {
        this.$store.dispatch("loading",false)
        return 0
      }
      await this.getData()
      this.$message({
        message: '刪除成功',
        type: 'success'
      });
      this.$store.dispatch("loading",false)
    },
    search(x) {
      alert(x)
    },
    async batchDelete() {
      if(!this.handleSelectionChangeArr.length) return 0
      this.$store.dispatch("loading",true)
      for(let item of this.handleSelectionChangeArr) {
        await this.$api.deleteViewList(item.id)
      }
      await this.getData()
      this.$store.dispatch("loading",false)
    },
    handleSelectionChange(x) {
      this.handleSelectionChangeArr=x
      console.log(this.handleSelectionChangeArr)
    }
  }
}
</script>