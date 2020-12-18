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
    computed:mapGetters({
        getItemList:'getItemList',
    })
}
</script>

<style>

</style>