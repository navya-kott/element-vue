<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Modal, Toast } from 'bootstrap';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { userDetailsStore } from "@/stores/user";

const userDetails=userDetailsStore()
const validationSchema = yup.object({
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const { handleSubmit, errors, resetForm } = useForm({
    validationSchema
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: password } = useField("password");


const toastElement = ref<HTMLElement | null>(null);
let toastInstance: Toast | null = null;

const modalElement = ref<HTMLElement | null>(null);
let modalInstance: Modal | null = null;

onMounted(() => {
    if (toastElement.value) {
        toastInstance = new Toast(toastElement.value);
    }

    if (modalElement.value) {
        modalInstance = new Modal(modalElement.value);
    }
});

const showToast = () => {
    toastInstance?.show();
};

const closeModal = () => {
    modalInstance?.hide();
};

const handleSignup = handleSubmit(async () => {
    try {
        await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
        });
        userDetails.updateName( name.value)
        resetForm()
        closeModal();
        showToast();

    } catch (error) {
        console.log("Error:", error);
    }
});
</script>

<template>
    <div class="modal fade" tabindex="-1" id="signupModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">
                <form class="needs-validation" @submit="handleSignup">
                    <div class="mb-3">
                        <label for="signupName" class="form-label">Name</label>
                        <input v-model="name" type="text" class="form-control" id="signupName" name="name" required>
                        <small class="text-danger">{{ errors.name }}</small>
                    </div>

                    <div class="mb-3">
                        <label for="signupEmail" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control" id="signupEmail" name="email" required>
                        <small class="text-danger">{{ errors.email }}</small>
                    </div>

                    <div class="mb-3">
                        <label for="signupPassword" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="signupPassword"
                            name="password" required>
                        <small class="text-danger">{{ errors.password }}</small>
                    </div>

                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Signup</button>
                </form>
            </div>
        </div>
    </div>

    <div class="toast-container position-fixed bottom-0 end-0 p-5">
        <div id="signupToast" class="toast" ref="toastElement" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">Welcome to the Element :)</div>
        </div>
    </div>
</template>
