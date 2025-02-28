<script setup lang="ts">
import CarDetailsComponent from "@/components/CarDetailsComponent.vue";
import api from "@/config/axios";
import { onMounted, ref } from "vue"

const data: any = ref([])
let base64String:any
onMounted(async () => {
    try {
        const response = await api.get(`/car/list`);
        data.value = response.data
        const buffer = new Uint8Array(data.value.data.image);
    
     base64String= btoa(
      new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    const img = `data:image/png;base64,${base64String}`;
    } catch (error) {
        console.log("File fetch error:", error);
    }
})

</script>


<template>
    <div v-for="item in data.data">
        <CarDetailsComponent :model=item.model :year=item.year image=" `data:image/png;base64,${base64String}`" />
    </div>
</template>

<style scoped>
.title {
    color: rgb(9, 63, 88);
}
</style>