import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        name:localStorage.getItem('userName')
    }),

    actions: {
        updateName(name: any) {
            this.name = name
            localStorage.setItem('userName', name)
        }
    },

    getters: {
        doubleCount: (state) => state.name
    }
})