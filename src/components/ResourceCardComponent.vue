<script setup lang="ts">
defineProps({
imgUrl:String,
content:String
})
</script>

<template>
   <div class="col-sm-4 col-md-4 col-lg-4 ">
            <div class="d-flex flex-column">
                <img class="img-fluid" :src= "imgUrl" alt="">
                <div class="trans">
                    <p class=" fs-5 " href="#">{{content}}
                    </p>
                    <div class="mt-5">Learn more</div>
                </div>

            </div>
        </div>

</template>

<style>
.trans {
    background-color: #ffff;
    padding: 1rem;
    height: 20vh;
}

.trans div:hover {
    color: #0e2b46;
    font-weight: bold;
}

.trans:hover {
    background-color: #82c341;
    color: #fff;
    padding: 1rem;
}
</style>