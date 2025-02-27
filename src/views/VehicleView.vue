<script setup lang="ts">
import VehicleComponent from "@/components/VehicleComponent.vue";
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
const route = useRoute()
const brand = route.query.id

const data: any = ref([])
onMounted(async () => {
    try {
        const res = await fetch(`http://localhost:3000/car/brand?name=${brand}`);
        const response = await res.json()
        data.value = response.data
    } catch (e) {
        console.error("Error fetching brands:", e);
    }

})

</script>


<template >
    <h1 class="mt-5 title">{{ brand }}</h1>
    <div v-for="item in data">
        <VehicleComponent :model=item.model :year=item.year />
    </div>
</template>

<style scoped>
.title {
    color: rgb(9, 63, 88);
}
</style>