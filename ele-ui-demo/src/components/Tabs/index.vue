<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我的消息" name="first">
      <notices-table></notices-table>
    </el-tab-pane>
    <el-tab-pane label="招聘公告" name="second">
      <keep-alive>招聘公告
        <!--<notices-table v-if="activeName=='second'"></notices-table>-->
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import NoticesTable from '@/components/NoticesTable'

  export default {
    name: 'tabs',
    components: {
      NoticesTable
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(event.target)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .el-tabs__item {
    width: 138px;
    /*padding: 0;*/
  }
  .el-tabs__item.is-active {
    color: orange;
  }
  .el-tabs__item:hover {
    color: orange;
  }
  .el-tabs__active-bar {
    background-color: orange;
  }
</style>
