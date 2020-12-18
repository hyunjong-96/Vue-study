import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        itemList:[]
    },
    getters:{
        getItemList:function(state){
            return state.itemList
        }

    },
    mutations:{
        addTodo:function(state,payload){
            console.log(`mutations의 payload : ${payload}`)
            state.itemList.push(payload)
        },
        deleteTodo:function(state){
            state.itemList=[]
        },
        deleteOnlyTodo:function(state,payload){
            console.log('index:',payload)
            state.itemList.splice(payload,1)
            console.log('itemList:',state.itemList)
        }
    },
    actions:{
        addTodo:function(context,payload){
            console.log(`actions의 payload : ${payload}`)
            return context.commit('addTodo',payload)
        },
        deleteTodo:function(context){
            return context.commit('deleteTodo')
        },
        deleteOnlyTodo:function(context,payload){
            return context.commit('deleteOnlyTodo',payload)
        }
    }
})