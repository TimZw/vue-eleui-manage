<template>
  <!--企业首页-->
  <el-container class="dashboard-container">
    <!--头部-->
    <el-header class="dashboard-top" height="54px">
      <div class="top-left">泰康人力资源管理系统改版上线啦！</div>
      <div class="top-right">X</div>
    </el-header>
    <!--主体部分-->
    <el-container>
      <!--左部-->
      <el-aside width="30%" class="dashboard-left">
        <!--用户信息-->
        <el-container class="left-left">
          <el-header>
            <div class="user-img">
              <img :src="userInfo.avatar" alt=""/>
            </div>
            <div class="user-detail">
              <h3>{{userInfo.name}}</h3>
              <p>({{userInfo.rank}})</p>
              <p>{{userInfo.department}}</p>
            </div>
          </el-header>
          <el-main>
            <ul class="user-ul">
              <li><i></i>{{userInfo.entryTime}}</li>
              <li><i></i>{{userInfo.post}}</li>
              <li><i></i>{{userInfo.mobilePhoneNumber}}</li>
              <li><i></i>{{userInfo.tel}}</li>
            </ul>
          </el-main>
        </el-container>
        <!--<span v-for='role in roles' :key='role'>{{role}}</span>-->
        <div class="dashboard-text">您可以进行以下操作</div>
        <div class="look">
          <router-link to="/personal-details/index">
            <p>查看/维护个人信息</p>
          </router-link>
          <router-link to="/personal-details/index">
            <p>查看下属员工信息</p>
          </router-link>

        </div>
        <!--在线调查-->
        <div class="online-survey">
          <h3>在线调查</h3>
          <ul>
            <li v-for="(value,index) in onlineSurvey" :key="index">
              <i>{{value.title}}</i><span>{{value.content}}</span>
            </li>
          </ul>
        </div>
      </el-aside>
      <!--右部-->
      <el-main class="dashboard-right">
        <!--设备统计-->
        <div class="right-top bgw">
          <el-container>
            <el-header class="right-top-h">
              <h3>设备统计</h3>
            </el-header>
            <el-main class="right-top-m">
              <el-row :gutter="10">
                <el-col :md="2">
                  <router-link to="/work/index">
                    <div class="grid-content bg-purple">
                      <img src="../../../static/images/out.png" alt="">
                      <p>申请公出</p>
                    </div>
                  </router-link>
                </el-col>
                <el-col :md="2">
                  <router-link to="/work/index">
                    <div class="grid-content bg-purple">
                      <img src="../../../static/images/absence.png" alt="">
                      <p>申请销假</p>
                    </div>
                  </router-link>
                </el-col>
                <el-col :md="2">
                  <router-link to="/work/index">
                    <div class="grid-content bg-purple">
                      <img src="../../../static/images/rvacation.png" alt="">
                      <p>申请休假</p>
                    </div>
                  </router-link>
                </el-col>
                <el-col :md="2">
                  <router-link to="/work/index">
                    <div class="grid-content bg-purple">
                      <img src="../../../static/images/review.png" alt="">
                      <p>我的审批</p>
                    </div>
                  </router-link>
                </el-col>
                <el-col :md="2">
                  <router-link to="/work/index">
                    <div class="grid-content bg-purple">
                      <img src="../../../static/images/out.png" alt="">
                      <p>查看我的申请</p>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </div>
        <!--待办事项-->
        <div class="right-md bgw">
          <el-container class="w100">
            <el-header class="right-md-h">
              <h3>待办事务</h3>
            </el-header>
            <el-main class="right-md-m">
              <ul>
                <li v-for="(value,index) in backlog" :key="index">
                  <span class="backlog-tit">{{value.title}}</span>
                  <span>7天内<i :class="[value.sevenDayWithin == '0' ? 'i-no' : 'i-bg']">{{value.sevenDayWithin=='0' ? '(无)' : value.sevenDayWithin+'个'}}</i></span>
                  <span>3天内<i :class="[value.threeDayWithin == '0' ? 'i-no' : 'i-bg']">{{value.threeDayWithin=='0' ? '(无)' : value.threeDayWithin+'个'}}</i></span>
                  <span>当天<i :class="[value.today == '0' ? 'i-no' : 'i-bg']">{{value.today=='0' ? '(无)' : value.today+'个'}}</i></span>
                  <span>过期<i :class="[value.staleDated == '0' ? 'i-no' : 'i-bg']">{{value.staleDated=='0' ? '(无)' : value.staleDated+'个'}}</i></span>
                </li>
              </ul>
            </el-main>
          </el-container>
        </div>
        <!--我的消息、招聘公告-->
        <div class="right-bm bgw">
          <tabs></tabs>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Tabs from '@/components/Tabs'// tabs切换
  import { getOnline, getBacklog } from '@/api/home'
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard',
    components: {
      Tabs
    },
    data() {
      return {
        // 在线调查
        onlineSurvey: null,
        // 待办事项
        backlog: null,
        listLoading: true
      }
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getOnline().then(res => {
          this.onlineSurvey = res.data
          this.listLoading = false
        })
        getBacklog().then(res => {
          this.backlog = res.data
          this.listLoading = false
        })
      }
    },
    created() {
      this.fetchData()
    },
    computed: {
      ...mapGetters([
        'name',
        'roles',
        'userInfo'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .w100 {
    width: 100%;
    height: 100%;
  }

  .el-header {
    padding: 0;
    color: #333;
    /*line-height: 54px;*/
  }

  .el-aside {
    margin-right: 16px;
    /*color: #333;*/
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    padding: 0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  $bgw: #FFFFFF;
  .bgw {
    background-color: $bgw;
  }

  .left-left {
    height: 329px;
    background-color: $bgw;
    .el-header {
      height: 40% !important;
      .user-img {
        width: 40%;
        float: left;
        margin-top: 10px;
        vertical-align: middle;
      }
      .user-detail {
        float: left;
        margin-top: 30px;
        h3 {
          width: 100%;
          margin: 0;
          line-height: 36px;
        }
        p {
          line-height: 20px;
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .left-left .user-ul {
    margin: 0;
  }

  .left-left .user-ul li {
    text-align: left;
    height: 40px;
    line-height: 40px;
    i {
      display: inline-block;
      width: 20px;
      margin-right: 40px;
    }
  }

  .look {
    height: 103px;
    background-color: $bgw;
    margin-bottom: 15px;
    p {
      height: 50%;
      line-height: 50px;
      margin: 0;
      text-align: left;
      margin-left: 30px;
    }
  }

  .online-survey {
    height: 166px;
    background-color: $bgw;
    h3 {
      height: 53px;
      line-height: 53px;
      text-align: left;
      padding-left: 20px;
      border-bottom: 1px solid #F0F0F0;
    }
    ul {
      text-align: left;
      margin-left: 20px;
      li {
        color: orangered;
        line-height: 30px;
        span {
          width: 150px;
          color: #333;
          font-size: 14px;
          margin-left: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      li:nth-child(2) {
        color: red;
        span {
          margin-left: 36px;
        }
      }
    }
  }

  .right-top {
    height: 164px;
    margin-bottom: 15px;
  }

  .right-top-h {
    height: 20% !important;
    line-height: 54px;
    text-align: left;
    border-bottom: 1px solid #F0F0F0;
  }

  .right-top-m {
    height: 110px !important;
    .el-row {
      margin: 0 !important;
    }
  }

  .right-md-h {
    height: 20% !important;
    line-height: 42px;
    text-align: left;
    border-bottom: 1px solid #F0F0F0;
  }

  .right-md-m {
    height: 80% !important;
    text-align: left;
    ul {
      height: 100%;
      padding-left: 20px;
      li {
        height: 33%;
        line-height: 54px;
        border-bottom: 1px solid #F0F0F0;
        span {
          width: 19%;
          display: inline-block;
          .i-bg {
            width: 50px;
            height: 20px;
            line-height: 20px;
            color: #ffffff;
            text-align: center;
            border-radius: 10px;
            background-color: orange;
            display: inline-block;
          }
        }
        .backlog-tit {
          font-weight: 600;
        }
      }
    }
  }

  .right-bm {
    overflow: hidden;
  }

  @media only screen and (min-width: 992px) {
    .el-col-md-2 {
      width: 20%;
    }
  }

  .right-md {
    height: 213px;
    margin-bottom: 19px;
  }

  .right-bm {
    height: 226px;
  }
  .dashboard-left {
    float: left;
  }
  .dashboard {
    &-container {
      height: 712px;
      padding: 0 17px 19px 15px;
      background-color: #F0F0F0;
    }
    &-text {
      height: 26px;
      font-size: 15px;
      line-height: 26px;
      text-align: left;
    }
    &-left {
      height: 638px;
      float: left;
    }
    &-right {
      width: 67%;
      float: right;
    }
    &-top {
      .top-left {
        width: 300px;
        float: left;
        line-height: 54px;
      }
      .top-right {
        width: 50px;
        text-align: center;
        float: right;
        cursor: pointer;
        line-height: 54px;
      }
    }
  }
</style>
