<script setup lang="ts">
import ResourceCardComponent from '@/components/ResourceCardComponent.vue';
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

        <ResourceCardComponent imgUrl="../assets/res3.jpg"
            content="Safety tips for driving on icy roads without any fail" />
        <ResourceCardComponent imgUrl="@/assets/res2.jpg"
            content="Reducing fleet downtime: Digital tools and strategies webinar" />
        <ResourceCardComponent imgUrl="@/assets/res1.jpg"
            content="What real-time fleet tracking means for last-mile fleets" />

    </div>

</template>

<style scope>
.resource-section {
    font-size: 2.7rem;
    font-weight: bold;
    color: rgb(43, 105, 105);
}
</style>