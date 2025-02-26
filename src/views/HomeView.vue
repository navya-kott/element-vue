<script setup lang="ts">
import { useRouter } from 'vue-router';
import { userDetailsStore } from '@/stores/user';
const router=useRouter()

const goServices = () => {
    router.push({
        name: "service"
    })
}
const userData=userDetailsStore()
</script>

<template>

    <h2 v-if="userData.name!=='unknown'">Hey {{ userData.name }},</h2>
    <h2 v-else>Hey,</h2>


    <div class="row mt-5">
        <div class="col-md-6">
            <h1 class="hero-title">Empowering your fleet to be safer, smarter and more productive</h1>
            <p class="mt-5">Driven by our Purpose, to Move the world through intelligent
                mobility, we make the complex simple and enable our clients to do more. Grow your business
                by
                putting
                our actionable insights, fleet services, and intelligent mobility solutions to work for you.
            </p>
        </div>

        <div class="col-md-6 ">
            <div class="d-flex justify-content-center align-item-center"> <img
                    src="../assets/elementfleet_leftimagerighthexcarddesktop.jpg" class="w-100" alt="...">
            </div>
        </div>
    </div>

    <div class="find-more">
        <button type="button" class="btn btn-success  btn-lg" @click="goServices">Find out more</button>
    </div>

</template>

<style scope>
.hero-title {
    font-size: 5rem;
    font-family: "Poppins";
    font-weight: bold;
}

.find-more {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (min-width:782px) {
    .find-more {
        justify-content: start;
        font-size: 2.4rem;
    }
}
</style>