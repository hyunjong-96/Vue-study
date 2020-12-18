<template>
    <header class="headr">
        <h1 class="logo">My Todo List</h1>
        <p class="date">{{thisTime}}</p>
    </header>
</template>

<script>
export default {
    data(){
        return{
            thisTime:""
        }
    },
    created(){
        const now = new Date()
        const month = now.getMonth()
        const day = now.getDate()
        const weekList = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
        const week = weekList[now.getDay()]
        this.thisTime = `${month}/${day} ${week}`
    }
}
</script>

<style>

</style>