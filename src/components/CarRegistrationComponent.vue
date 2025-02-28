<script setup lang="ts">
import api from '@/config/axios';
import * as yup from "yup"
import { useField, useForm } from 'vee-validate';

const validationSchema = yup.object({
    brand: yup.string().required("Brand is required"),
    model: yup.string().required("Model is required"),
    number: yup.string().required("Car number is required"),
    year: yup.string().required("Car model year is required"),
    place: yup.string().required("Place is required"),
    file: yup.string().required("Car image is required")

})
const { handleSubmit, resetForm } = useForm({ validationSchema })

const { value: brand } = useField("brand");
const { value: model } = useField("model");
const { value: year } = useField("year");
const { value: place } = useField("place");
const { value: number } = useField("number");
const { value: file } = useField("file")

const handleFileUpload = (event: any) => {    
    file.value = event.target.files[0]
}

const handleRegistration = handleSubmit(async (value: any) => {
    try {
        const formData = new FormData();
        Object.keys(value).forEach((key) => {
            formData.append(key, value[key]);
        });
        await api.post("/car", formData, {
            headers: { "Content-Type": "multipart/form-data", }
        },)
        resetForm()
    } catch (error) {
        console.log("error", error);
    }
})

</script>

<template>
    <div class="modal fade" tabindex="-1" id="carModal" aria-labelledby="contactToggleLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-5">
                <form class="needs-validation" @submit="handleRegistration">

                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <input v-model="brand" type="text" class="form-control" id="brand" name="brand" required>
                    </div>

                    <div class="mb-3">
                        <label for="model" class="form-label">Model</label>
                        <input v-model="model" type="text" class="form-control" id="model" name="model" required>
                    </div>

                    <div class="mb-3">
                        <label for="number" class="form-label">Number</label>
                        <input v-model="number" type="text" class="form-control" id="number" name="number" required>
                    </div>

                    <div class="mb-3">
                        <label for="place" class="form-label">Place</label>
                        <input v-model="place" type="text" class="form-control" id="place" name="place" required>
                    </div>

                    <div class="mb-3">
                        <label for="year" class="form-label">Year</label>
                        <input v-model="year" type="date" class="form-control" id="year" name="year" required>
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Upload car image</label>
                        <input class="form-control" type="file" id="file" name="file" @change="handleFileUpload">
                    </div>

                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Register</button>

                </form>
            </div>
        </div>
    </div>
</template>
