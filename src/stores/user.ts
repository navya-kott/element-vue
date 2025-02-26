import { defineStore } from "pinia";

export const userDetailsStore = defineStore('user', {
    state: () => ({
        name: 'unknown'
    }),
    actions: {
        updateName(name: any) {
            this.name = name
        }
    },
    getters: {
        doubleCount: (state) => state.name
    }
})