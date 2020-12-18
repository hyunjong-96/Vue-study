<template>
    <div>
        <ul>
            <li v-for="(item, index) in getItemList" v-bind:key="index">{{item}}
                <button v-on:click="deleteOnlyTodo(index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters({
        getItemList:'getItemList',
    }),
    methods:{
        deleteOnlyTodo(index){
            this.$store.dispatch('deleteOnlyTodo',index)
        }
    }
}
</script>

<style>

</style>