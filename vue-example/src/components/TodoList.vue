<template>
    <div>
        {{test}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            test:this.$store.state.testList
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