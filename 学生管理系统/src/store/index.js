import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import select from './module/select'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        user,
        select,
    }
})