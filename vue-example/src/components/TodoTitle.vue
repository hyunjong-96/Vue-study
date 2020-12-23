<template>
    <div class="title">
        <p class="title_message">Good evening! {{nickname}}</p>
        <p class="title_task">
            You've got<br>
            <span class="title_taskTotal">{{taskTotal}}</span><br>
            tasks today!
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nickname:"hyunjong",
            taskTotal:5
        }
    }
}
</script>

<style lang="scss">
$backgroundColor:red;
    .title{
        height:50%;
        margin: 0% 2%;
        
        &_task{
            font-size:1.2em;
            font-weight: bold;
            
        }
        &_taskTotal{
            font-size:2em;
        }
    }
</style>