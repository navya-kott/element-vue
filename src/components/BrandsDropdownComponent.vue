<script setup lang="ts">
import { ref, onMounted } from "vue";

const brands = ref<any[]>([]);

onMounted(async () => {
    try {
        const res = await fetch("http://localhost:3000/cars");
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
            
            <a class="dropdown-item" href="#">{{ item._id }}</a>
        </li>
    </ul>
</template>
