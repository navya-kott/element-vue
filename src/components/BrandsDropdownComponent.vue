<script setup lang="ts">
import { ref, onMounted } from "vue";

const brands = ref<any[]>([]);

onMounted(async () => {
    try {
        const res = await fetch("http://localhost:3000/car");
       const response= await res.json()
       brands.value=response.data


    } catch (e) {
        console.error("Error fetching brands:", e);
    }
});

</script>

<template>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li v-for="item in brands" :key="item._id">
            <router-link :to="{path:'/vehicle',query:{id:item._id}}" class="dropdown-item" >{{ item._id }}</router-link>
        </li>
    </ul>
</template>
