<template>
  <div class="viewList">
    <el-table :data="list" style="width: 100%">
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
export default {
  data() {
    return {
      list:[]
    }
  },
  async created() {
    await this.getData()
  },
  methods: {
    async getData() {
      this.list=await this.$api.getViewList()
    },
    async del(x) {
      await this.$api.deleteViewList(x)
      await this.getData()
    }
  }
}
</script>