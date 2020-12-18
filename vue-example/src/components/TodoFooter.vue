<template>
    <div>
        <button v-on:click="deleteAll">전체삭제</button>
    </div>
</template>

<script>
export default {
    methods:{
        deleteAll(){
            this.$store.dispatch('deleteTodo')
        }
    }
}
</script>

<style>

</style>