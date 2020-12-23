<template>
    <div class="controller">
        <div class="select">
            <v-select :items="filter" v-model="select" item-text="text" item-value="value" label="filter" dense solo return-object class="selectbox">
            </v-select>
        </div>
        <button class="clear" v-on:click="deleteTodo">Clear All</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
        filter:[{
            text:'date-asc',
            value:1
        },{
            text:'date-desc',
            value:2
        },{
            text:'name-asc',
            value:3
        },{
            text:'name-desc',
            value:4
        }]
    }
    },
    methods:{
        deleteTodo(){
            this.$store.dispatch('deleteTodo')
        }
    }
}
</script>

<style lang="scss">
    .controller{
        display:flex;
        justify-content: space-between;
        .select{
            .selectbox{
                margin-top: 15px;
                
            }
        }
    }
</style>