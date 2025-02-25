<script setup lang="ts">
import {onMounted, ref} from "vue"
import { Toast } from 'bootstrap';


const toastElement = ref<HTMLElement | null>(null);
let toastInstance: Toast | null = null;

onMounted(() => {
    if (toastElement.value) {
        toastInstance = new Toast(toastElement.value);
    }
});

const showToast = () => {
    toastInstance?.show();
};

const details = ref({
    name: "",
    email: "",
    password: ""
})


const handleSignup = async () => {
    try {
        await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details.value)
        })
        showToast();

    } catch (error) {
        console.log("=========================", error);
    }

};
</script>

<template>
    
    <div class="modal fade" tabindex="-1" id="signupModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">

                <form class="needs-validation"  @submit.prevent="handleSignup">

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
                    <button class="btn btn-success" id="signupToast" 
                       >Signup</button>
                </form>

            </div>
        </div>
    </div>
    
    <div class="toast-container position-fixed bottom-0 end-0 p-5 ">
        <div id="signupToast" class="toast" ref="toastElement" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">Welcome to the Element :)</div>
        </div>
    </div>

    </template>
