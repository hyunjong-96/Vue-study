<template>
    <div>
        <ul class="list">
            <li v-for="(todo, index) in getItemList" v-bind:key="index" class="list_item">
                <input type="checkBox" id="list_item_1"/>
                <label for="list_item_1">
                    <p class="list_text">{{todo}}</p>
                </label>
                <p class="list_date">12/18</p>
                <button class="list_delete">삭제</button>
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

<style lang="scss">
// $color: #f0f0f0;
// .list {
//   background: $color;

//   &_text {
//     font-weight: bold;
//   }
// }
</style>