import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        itemList:[],
        testList:{}
    },
    getters:{
        test:function(state){
            return state.testList
        },
        getItemList:function(state){
            return state.itemList
        }

    },
    mutations:{
        addTodo:function(state,payload){
            console.log(`mutations의 payload : ${payload}`)
            state.itemList.push(payload)
        }
    },
    actions:{
        addTodo:function(context,payload){
            console.log(`actions의 payload : ${payload}`)
            return context.commit('addTodo',payload)
        }
    }
})