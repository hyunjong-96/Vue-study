<template>
    <div class="bottom">
        <div class="input">
        <v-row class="mb-1">
            <v-text-field v-model="newTodoItem" label="Todo" full-width dark filled rounded dense></v-text-field>
            <v-btn color='gray' fab small dark v-on:click="addTodo"><v-icon>mdi-pencil</v-icon></v-btn>
        </v-row>
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
        justify-content: center;
    }
</style>