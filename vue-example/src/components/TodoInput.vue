<template>
    <div class="bottom">
        <div class="input">
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">추가</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            newTodoItem:""
        }
    },

    methods:{
        addTodo(){
            console.log(`addTodo 함수의 newTodoItem: ${this.newTodoItem}`)
            this.$store.dispatch('addTodo',this.newTodoItem)
            this.clearInputBox()
        },
        clearInputBox(){
            this.newTodoItem=""
        }
    },
    computed: mapGetters({
        item:'getItem'
    })
}
</script>

<style lang='scss'>
    .bottom{
        height:20%;
        width:100%;
        margin: 0% 2%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
</style>