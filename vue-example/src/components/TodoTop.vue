<template>
    <header class="top">
        <h1 class="top_logo">My Todo List</h1>
        <p class="top_date">{{thisTime}}</p>
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
    },
    
}
</script>

<style lang="scss">
    .top{
        height: 20%;
        display:flex;
        justify-content: space-between;
        margin: 0% 2%;
        &_logo{  
            font-size: 1em;
            font-weight: bold;
        }
        &_date{
            
            font-size:0.8em
        }
    }
</style>