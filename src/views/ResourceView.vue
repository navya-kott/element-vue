<script setup lang="ts">
</script>

<template>

    <div class="row mt-5">
        <div class="col-6">
            <p class="resource-section"> Latest news and resources </p>
        </div>

        <div class="col-6 ">
            <div class="d-flex justify-content-end">
                <a class="link-secondary ">See more </a>
            </div>
        </div>

    </div>

    <div class="row mt-3">
        <div class="col-sm-4 col-md-4 col-lg-4 ">
            <div class="d-flex flex-column">
                <img class="img-fluid" src="../assets/res1.jpg" alt="">
                <div class="trans">
                    <p class=" fs-5 " href="#">What real-time fleet tracking means for last-mile fleets
                    </p>
                    <p class="mt-5">Learn more</p>
                </div>

            </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-4 ">
            <div class="d-flex flex-column">
                <img class="img-fluid" src="../assets/res2.jpg" alt="">
                <div class="trans">
                    <p class=" fs-5 " href="#">Reducing fleet downtime: Digital tools and strategies webinar
                    </p>
                    <p class="mt-5">Learn more</p>
                </div>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 col-lg-4 ">
            <div class="d-flex flex-column">
                <img class="img-fluid" src="../assets/res3.jpg" alt="">

                <div class="trans">
                    <p class="fs-5 " href="#">Safety tips for driving on icy roads without any fail</p>
                    <p class="mt-5">Learn more</p>
                </div>
            </div>
        </div>

    </div>

</template>

<style scope>
.resource-section {
    font-size: 2.7rem;
    font-weight: bold;
    color: rgb(43, 105, 105);
}

.trans {
    background-color: #ffff;
    padding: 1rem;
    height: 20vh;
}

.trans:hover {
    background-color: #82c341;
    color: #fff;
    padding: 1rem;
}
</style>