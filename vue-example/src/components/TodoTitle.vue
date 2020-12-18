<template>
    <div class="title">
        <p class="title_message">{{message}}</p>
        <p class="title_task">
            You've got
            <span class="title_taskTotal">{{taskTotal}}</span>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:"Hi! hyunjong",
            taskTotal:5
        }
    }
}
</script>

<style>

</style>