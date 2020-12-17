<template>
    <div>
        <ul>
            <li v-for="item in getItemList" v-bind:key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            // test:this.$store.state.testList
            test:{}
        }
    },
    computed:mapGetters({
        getItemList:'getItemList',
        testList:'test'
    })
}
</script>

<style>

</style>