<template>
    <div class="body">
        <TodoController/>
        <TodoList/>
        <TodoFooter/>
    </div>
</template>

<script>
import TodoController from "./TodoController"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"
export default {
    components:{
        TodoController,
        TodoList,
        TodoFooter
    }
}
</script>

<style>
    .body{
        width:100%;
        height: 60%;
        padding: 0% 2%;
    }
</style>