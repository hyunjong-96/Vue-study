<template>
    <div>
        <ul class="list">
            <li v-for="(todo, index) in getItemList" v-bind:key="index" class="list_item">
                <div class="list_item_start">
                <input type="checkBox" class="list_item_start_1"/>
                <label for="list_item_1">
                    <p class="list_text">{{todo.todo}}</p>
                </label>
                </div>
                <div class="list_item_end">
                    <p class="list_date">{{todo.date}}</p>
                    <v-button v-on:click="deleteOnlyTodo(idex)" small class="list_delete"><v-icon>mdi-delete</v-icon></v-button>
                </div>
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
    },
}
</script>

<style lang="scss">
$color: #f0f0f0;
.list {
    &_item{
        background: $color;
        display:flex;
        justify-content: space-between;
        margin: 10px 0;
        padding:0 10px;
        &_start{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        &_end{
            // background: blue;
            display:flex;
            flex-direction: column-reverse;
            padding-top: 10px;
            font-size: 0.8em;
            color:#c4bfbf
        }
    }
  &_text {
      
        font-weight: bold;
        margin:16px;
  }
  &_date{
      
    //   background: palevioletred;
  }

  &_delete{
    //   background: red;
  }
}
</style>