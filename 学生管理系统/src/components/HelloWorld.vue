<template>
<div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <div class="logo">
                    <!-- <img src="@/assets/images/logo.jpg" alt=""> -->
                    <h2>o2o管理信息系统</h2>              
                </div>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>基础数据管理
                    </template>
                    <MenuItem name="1-1">
                       <router-link to="/teacher">学科管理</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        学库目录树管理
                    </template>
                    <MenuItem name="2-1">
                        <router-link to="/student">教材版本目录树管理</router-link> 
                    </MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        学员管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">意向学员</router-link> 
                    </MenuItem>
                </Submenu>
                 <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        教师管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">注册教师</router-link> 
                    </MenuItem>
                </Submenu>
                 <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        机构管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">机构树</router-link> 
                    </MenuItem>
                </Submenu>
                 <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        圈圈管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">圈圈管理</router-link> 
                    </MenuItem>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        教学管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">申请排课</router-link> 
                    </MenuItem>
                </Submenu>
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        直播课管理
                    </template>
                    <MenuItem name="3-1">
                        <router-link to="/student">课堂管理</router-link> 
                    </MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <Top></Top>
            </Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                        <Breadcrumb-item to="/main">首页</Breadcrumb-item>
                        <Breadcrumb-item to="/teacher">教师管理</Breadcrumb-item>
                        <Breadcrumb-item to="/student">学生管理</Breadcrumb-item>
                </Breadcrumb>
                <Card>
                    <div>Content
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
    
</template>
<script>
import Top from '@/components/top/Top'
    export default {
        components: {
          Top,
        },
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .logo{
        height: 60px;
        text-align: center;
        color: #d7dde4;
        line-height: 60px;    
    }
    a{
        color: #d7dde4;
    }
    /* .logo img{
        width: 80%;
        padding-top: 10px;
        
    } */
    /* .layout{
        width: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    } */
</style>
