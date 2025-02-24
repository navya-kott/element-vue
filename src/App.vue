<script setup lang="ts">
import { useRouter } from 'vue-router';
import BrandsDropdownComponent from './components/BrandsDropdownComponent.vue';
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
                    <BrandsDropdownComponent />
                </li>

                <li class="ms-lg-auto">
                    <button type="button" class="btn btn-success btn-sm" data-bs-target="#contactModal"
                        data-bs-toggle="modal">Contact us</button>
                </li>
            </ul>

        </div>


    </nav>
    <div class="modal fade" tabindex="-1" id="contactModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">

                <form class="needs-validation" novalidate>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required>
                    </div>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please provide a valid data.
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="tel" class="form-control" id="exampleInputPassword1" required>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required>
                    </div>

                    <div class="mb-3 form-check ms-1">
                        <a id="checkOutButton" data-bs-toggle="modal" data-bs-target="#termsModal"
                            data-bs-dismiss="modal">Check our terms and conditions
                            here</a><br>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>

            </div>
        </div>
    </div>

    <div class="modal fade" id="termsModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalToggleLabel2">Terms and conditions</h2>
                </div>
                <div class="modal-body">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
                        class="scrollspy-example" tabindex="0">
                        <h4 id="scrollspyHeading1">First heading</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the
                            page, the appropriate navigation link is highlighted. It's repeated throughout the component
                            example. We keep adding some more example copy here to emphasize the scrolling and
                            highlighting.</p>
                        <h4 id="scrollspyHeading2">Second heading</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the
                            page, the appropriate navigation link is highlighted. It's repeated throughout the component
                            example. We keep adding some more example copy here to emphasize the scrolling and
                            highlighting.</p>
                        <h4 id="scrollspyHeading3">Third heading</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the
                            page, the appropriate navigation link is highlighted. It's repeated throughout the component
                            example. We keep adding some more example copy here to emphasize the scrolling and
                            highlighting.</p>
                        <h4 id="scrollspyHeading4">Fourth heading</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the
                            page, the appropriate navigation link is highlighted. It's repeated throughout the component
                            example. We keep adding some more example copy here to emphasize the scrolling and
                            highlighting.</p>
                        <h4 id="scrollspyHeading5">Fifth heading</h4>
                        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the
                            page, the appropriate navigation link is highlighted. It's repeated throughout the component
                            example. We keep adding some more example copy here to emphasize the scrolling and
                            highlighting.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" id="backButton" data-bs-target="#contactModal"
                        data-bs-toggle="modal" aria-label="Close" data-bs-dismiss="modal">Back to first</button>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style>
.modal-content {
    background: rgba(8, 83, 54, 0.9);
}

.modal-content div {
    color: #bdddda;
}
</style>
