<script setup lang="ts">
import { useRouter } from 'vue-router';
import BrandsDropdownComponent from './components/BrandsDropdownComponent.vue';
import SignupComponent from './components/SignupComponent.vue';
const router = useRouter()

const goResource = () => {
    router.push({ name: "resource" })
}

const goHome = () => {
    router.push({ name: "home" })
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
                    <a class="nav-link active" href="#" @click="goHome">Home</a>
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
                    <BrandsDropdownComponent />
                </li>

                <div class="d-flex flex-column flex-lg-row ms-lg-auto align-items-center mt-2 mt-lg-0">
                    <button type="button" class="btn btn-success btn-sm me-lg-2 mb-2 mb-lg-0"
                        data-bs-target="#contactModal" data-bs-toggle="modal">
                        Contact us
                    </button>
                    <button type="button" class="btn btn-success btn-sm" data-bs-target="#signupModal"
                        data-bs-toggle="modal">
                        Signup
                    </button>
                </div>
            </ul>

        </div>


    </nav>
    <!-- signup -->
    <SignupComponent />

    <!-- <div class="modal fade" tabindex="-1" id="signupModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">

                <form class="needs-validation">

                    <div class="mb-3">
                        <label for="signupName" class="form-label">Name</label>
                        <input v-model="details.name" type="text" class="form-control" id="signupName" required>
                    </div>

                    <div class="mb-3">
                        <label for="signupEmail" class="form-label">Email </label>
                        <input v-model="details.email" type="email" class="form-control" id="signupEmail"
                            aria-describedby="emailHelp" required>
                    </div>

                    <div class="mb-3">
                        <label for="signupPaswword" class="form-label">Password</label>
                        <input v-model="details.password" type="password" class="form-control" id="signupPaswword"
                            required>
                    </div>
                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-success" id="signupToast" data-bs-dismiss="modal"
                        @click="handleSignup">Signup</button>
                </form>

            </div>
        </div>
    </div> -->

    <!-- contact us -->

    <div class="modal" tabindex="-1" id="contactModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">

                <form class="needs-validation" novalidate>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="contactUsEmail" aria-describedby="emailHelp"
                            required>
                    </div>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please provide a valid data.
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <input type="text" class="form-control" id="contactUsMessage" required>
                    </div>
                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>

                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-bs-dismiss="modal">Submit</button>
                </form>

            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-body">
                    We will ping you soon :)
                </div>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>

            </div>
        </div>
    </div>


    <RouterView />
</template>

