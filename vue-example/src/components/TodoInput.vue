<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">추가</button>
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
        },

        clearInputItem(){
            this.newTodoItem = ""
        }
    },
    computed: mapGetters({
        item:'getItem'
    })
}
</script>

<style>

</style>