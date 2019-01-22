<template>
  <div class="studentSelect">
    <div class="check">
      <h2 class="sel" @click="scanForm">
        <Row>
          <Col span="22">查询条件</Col>
          <Col span="2">
          <Icon type="ios-arrow-down" />
          </Col>
        </Row>
      </h2>
      <Form ref="studentForm" label-position="right" :label-width="100" v-if="isRellyShow" class="formInfo">
        <Row>
          <Col span="8">
          <form-item label="来源" prop="origin">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="用户类型" prop="usertypes">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="设备" prop="service">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
        </Row>
        </form-item>
        <Row>
          <Col span="8">
          <form-item label="学生姓名" prop="studentname">
            <Col span="24">
            <Input @on-change="handle" clearable placeholder="输入关键字搜索" class="search-input" :v-model="this.select.stuName" />
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="登录名" label-position="left" prop="loginname">
            <Col span="24">
            <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue" />
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="用户身份" label-position="left" prop="userId">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
        </Row>
        <Row>
          <Col span="8">
          <form-item label="销售分中心" prop="sale">
            <Col span="24">
            <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue" />
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="咨询师" label-position="left" prop="aquire">
            <Col span="24">
            <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue" />
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="网站" label-position="left" prop="network">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
        </Row>
        <Row>
          <Col span="8">
          <form-item label="年龄" prop="class">
            <Col span="12">
            <Select :v-model="this.select.tData.age" class="search-col">
              <Option v-for="(item,index) in this.select.tData" :key="index" :value="item.value">
                {{item.age}}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="注册时间" label-position="left" prop="register">
            <Col span="10">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
            <Col span="2" offset="1">
            </Col>
            <Col span="10">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="回访提交时间" label-position="left" prop="submit">
            <Col span="10">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
            <Col span="2" offset="1">--</Col>
            <Col span="10">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </Col>
          </form-item>
          </Col>
        </Row>
        <Row>
          <Col span="8">
          <form-item label="每页显示数目" prop="reveal">
            <Col span="24">
            <Input @on-change="handleClear" clearable :value="looknum" class="search-input" v-model="searchValue" />
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="渠道" label-position="left" prop="channel">
            <Col span="12">
            <Select v-model="searchKey" class="search-col">
              <Option v-for="(item,index) in columns12" :key="index" :value="item.value">
                {{item.title }}</Option>
            </Select>
            </Col>
          </form-item>
          </Col>
          <Col span="8">
          <form-item label="网页地址" label-position="left" prop="url">
            <Col span="24">
            <Input @on-change="handleClear" clearable placeholder="输入关键字搜索" class="search-input" v-model="searchValue" />
            </Col>
          </form-item>
          </Col>
        </Row>
        <form-item prop="search">
          <Row>
            <Col span="2" offset="11">
            <Button type="primary" @click="search">搜索</Button>
            </Col>
          </Row>
        </form-item>
      </Form>
    </div>
    <div class="checkout">
        <h2 class="sel">
          查询结果
        </h2>
      <Table border :columns="columns12" :data="this.select.tData">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="play(row)">视图</Button>
          <Button type="error" size="small" @click="remove(row)">删除</Button>
        </template>
      </Table>
       <Page :total="dataCount" :page-size="pageSize" show-sizer class="pagelist"   @on-change="changepage" @on-page-size-change="pagesize"  show-elevator
       />
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { tableInfo, removeData } from '@/api/vtable'
  import { mapGetters} from 'vuex'
  export default {
    data() {
      return this.$store.state.select
    }
    ,
    computed: {
      ...mapState(['select']),
      isRellyShow(){
        return this.$store.getters.isShowMethod;
      },
      // dataCount:() => this.$store.state.select.dataCount
    },
    methods: {
      scanForm() {
        this.$store.dispatch('isShowForm')
      },
      handle() {
        console.log(this.studentName)
      },
      handleClear() {},
      play(row) {
        this.$Modal.info( {
          title: '用户信息',
          content: `姓名：${row.name}
          <br>年龄：${row.age}
          <br>地址：${row.address}`
        })
      },        
      getInitData() {
        tableInfo().then(res=> {
          if (res.status==200) { 
            this.$store.dispatch('getList', res.data.data.projects)
          }
        })
      },
      changepage(index) {
        // 当前页码
        this.select.page = index;
        let _start = (index - 1) * this.select.pageSize;
        let _end = index * this.select.pageSize;
        this.select.tData = this.select.ajaxHistoryData.slice(_start, _end);
      }, 
      pagesize(index) {
        let _start = (this.select.page - 1) * index;
        let _end = this.select.page * index;
        this.select.tData = this.select.ajaxHistoryData.slice(_start, _end);
        // 当前展示条数
        this.select.pageSize = index;
      },
      remove(row){
        let id = row.id;
        removeData({id}).then(res=> {
          if(res.status == 200) {
            // this.$message.success('成功');
            this.getInitData();
          }
        })
      },
      //search
      search() {
        let {stuname, age, sex} = this.select.keyWords;
        tableInfo({stuname, age, sex}).then(res => {
          this.$store.dispatch('getList', res.data.data.projects)
        })
      }
    },
    mounted: function () {
      this.getInitData();
    }
  }
</script>
<style lang="less">
  .sel{
    width: 100%;
    overflow: hidden;
    background: #464C5B;
    border-radius: 5px;
    padding:3px 20px;
    color: #fff;
    margin:10px auto;
  }
  .pagelist{
    padding:10px 100px;
  }
</style>
