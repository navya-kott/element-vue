<script setup lang="ts">
import CarDetailsComponent from "@/components/CarDetailsComponent.vue";
import api from "@/config/axios";
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
const route = useRoute()

const data: any = ref([])
onMounted(async () => {
    try {
        const response = await api.get(`/car/67c051bf22fa1f185cef2e13`);
        data.value = response.data

    } catch (error) {
        console.log("File fetch error:", error);
    }
})

</script>


<template >
    <div v-for="item in data">
        <CarDetailsComponent :model=item.model :year=item.year />
    </div>
</template>

<style scoped>
.title {
    color: rgb(9, 63, 88);
}
</style>