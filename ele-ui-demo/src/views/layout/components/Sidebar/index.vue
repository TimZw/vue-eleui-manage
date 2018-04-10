<!--左侧导航-->
<template>
  <!--滚动条-->
  <scroll-bar>
    <el-menu
      mode="vertical"
      unique-opened
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF">
      <!--logo-->
      <div class="logo-box">
        <img src="../../../../../static/images/logo.png" alt="" />
        <p>人力资源管理系统</p>
      </div>
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .logo-box {
    width: 100%;
    height: 200px;
    img {
      width: 50%;
      margin: 25% 0 0 25%;
      background: #ffffff;
      border-radius: 100%;
    }
    p {
      width: 100%;
      text-align: center;
      color: #ffffff;
    }
  }
</style>
