<script setup lang="ts">
defineProps({
image:String,
year:String,
model:String,
brand:String,
place:String,
number:String
})
</script>


<template>
    <div class="row vehicles mt-5">
        <div class="col-6">
            <img :src="image" class="w-75" alt="...">
        </div>
        <div class="col-6">
            <p class="resource-section"> {{model}} </p>
            <p>{{year}}</p>
            <p>Bayerische Motoren Werke AG, trading as BMW Group, is a German multinational manufacturer of luxury
                vehicles and motorcycles headquartered in Munich, Bavaria, Germany.</p>
        </div>
    </div>
</template>

<style scoped>
.vehicles{
    background-color: rgb(206, 224, 235);
    padding: 3rem;
    border-radius:2%
}
.resource-section {
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(43, 105, 105);
}
</style>