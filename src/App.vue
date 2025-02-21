<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const goResource = () => {
    router.push({ name: "resource" })
}

const goHome=()=>{
    router.push({name:"home"})
}
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand " href="#"><img height="60%" width="60%" src="./assets/elementfleet_logodesktop.svg"
                class="rounded mx-auto d-block" alt="...">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
            <ul class="navbar-nav d-flex w-100 flex-column flex-lg-row justify-content-center justify-content-lg-start">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" @click="goHome">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="goResource">Resource</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Brands
                    </a>
                    <ul class="dropdown-menu" id="menu">
                    </ul>
                </li>
                <li class="ms-lg-auto">
                    <button type="button" class="btn btn-success btn-sm" data-bs-target="#contactModal"
                        data-bs-toggle="modal">Contact us</button>
                </li>
            </ul>

        </div>


    </nav>
    <RouterView />
</template>

<style></style>
