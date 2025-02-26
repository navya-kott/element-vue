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
        <div v-if="alignmentLeft" class="box left">
            <img class="d-flex justify-content-center align-item-center img-fluid " :src="imgUrl" alt="">
            <p class="mt-3 fs-5 ">{{ content }}
            </p>
        </div>

        <div v-else class="box right">
            <img class="d-flex justify-content-center align-item-center img-fluid " :src="imgUrl" alt="">
            <p class="mt-3 fs-5 ">{{ content }}
            </p>
        </div>

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
    padding: 2rem;
    color: white;
    max-width: 60%;
    border-radius: 8px;
}

.left {
    margin-top: 1rem;
    background-color: #93b6ce;
    align-self: flex-start;
    align-items: center;

}

.right {
    margin-top: 1rem;
    background-color: #97caad;
    align-self: flex-end;
}
</style>