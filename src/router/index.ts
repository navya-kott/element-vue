import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ResourceView from '@/views/ResourceView.vue'
import ServiceView from '@/views/ServiceView.vue'
import VehicleView from '@/views/VehicleView.vue'
import CarDetailsView from '@/views/CarDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/resource",
      name: "resource",
      component: ResourceView
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView
    },
    {
      path: "/vehicle",
      name: "vehicle",
      component: VehicleView
    },
    {
      path: "/car-details",
      name: "car-details",
      component: CarDetailsView
    },
  // {
  //     path: "/about",
  //     name: "about",
  //     component: AboutView
  //   }

  ],
})

export default router
