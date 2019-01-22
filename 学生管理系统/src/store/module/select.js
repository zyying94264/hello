// import {tableInfo} from '@/api/vtable'
const state = {
    ajaxHistoryData:[],
    // 初始化信息总条数
    dataCount:0,
    // 每页显示多少条
    pageSize:10,
    // 当前页码
    page:1,
    keyWords:{
        stuName:'',
        age:'',
        sex:'',
    },
    looknum: 10,
    isShow: true,
    studentName:'',
    formItem: {
        date: '',
        time: '',
    }, 
    columns12: [
        {
            title: '姓名',
            slot: 'name',
            value:'name',
        },
        {
            title: '地址',
            key: 'address',
            value:'address'
        },
        {
            title: '年龄',
            key: 'age',
            value:'age',

        },
        {
            title: '城市',
            key: 'city',
            value:'city',
        },
        {
            title: 'email',
            key: 'email',
            value:'email',
        },
        {
            title: 'url',
            key: 'url',
            value:'url',
        },
        {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
            value:'action'
        }
    ],
    
    searchKey1:'',
    searchKey:'',
    searchValue:'',
    dataCount:0,
    tData:[], 
    selAge:[],      
}
const getters = {
    isShowMethod(state){
        return state.isShow;
    },
}
const actions = {
    isShowForm({commit}){
        commit('showForm')
    },
    getTdata({commit}, data) {
        commit('setTabledata', data)
    },
    getList({commit},data){
        commit('handleListApproveHistory',data)
    },
    getchangeList({commit},index){
        commit('changepage',index)
    },
    getpaseSize({commit},index){
        commit('pagesize',index)
    },
}
const mutations = {
    showForm(state){
        state.isShow = !state.isShow;
    },
    handleListApproveHistory(state,data){
        // 保存取到的所有数据
        state.ajaxHistoryData = data;
        state.dataCount = data.length;
        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
        if(data.length < state.pageSize){
          state.tData = state.ajaxHistoryData;
        }else{
          state.tData = state.ajaxHistoryData.slice(0,state.pageSize);
        }
      },
}
export default {
    state,
    getters,
    actions,
    mutations
}; 