<script setup lang="ts">
defineProps({
    heading: String,
    content: String,
    imgUrl: String,
    alignmentLeft: Boolean
})
</script>

<template>

    <div class="container">
        <div class="box left"><p class=" fs-5 " href="#">{{content}}
        </p></div>
        <div class="box right"><p class=" fs-5 " href="#">{{content}}
        </p></div>

    </div>
</template>

<style scoped>
.container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.box {
    padding: 20rem;
    color: white;
    max-width: 50%;
    border-radius: 8px;
}

.left {
    background-color: #3498db;
    align-self: flex-start;
}

.right {
    background-color: #2ecc71;
    align-self: flex-end;
}
</style>