<template>
  <el-table
    :data="myMessage"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="priority"
      label="优先级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sendTime"
      label="发送时间">
    </el-table-column>
  </el-table>
</template>

<script>
  import { filterTime } from '@/utils/index'// 时间过滤器
  import { getMessage } from '@/api/home'
  export default {
    name: 'noticesTable',
    data() {
      return {
        myMessage: null,
        loadingList: true
      }
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getMessage().then(res => {
          this.myMessage = res.data
          for (let i = 0; i < this.myMessage.length; i++) {
            this.myMessage[i].sendTime = filterTime(this.myMessage[i].sendTime)
          }
          this.listLoading = false
        })
      }
    },
    created() {
      this.fetchData()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .el-table th {
    text-align: center;
  }
  .el-tabs__header {
    margin: 0;
  }
</style>
