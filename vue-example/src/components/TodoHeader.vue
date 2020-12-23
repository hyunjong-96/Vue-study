<template>
    <header class="header">
        <TodoTop/>
        <TodoTitle/>
        <TodoInput/>
    </header>
</template>

<script>
import TodoTop from './TodoTop';
import TodoTitle from './TodoTitle';
import TodoInput from './TodoInput';
export default {
    components:{
        TodoTop,
        TodoTitle,
        TodoInput
    }
}
</script>

<style lang="scss">

    .header{
        height:40%;
        background-image: url('~@/assets/sky.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        color:white;
    } 
    
</style>