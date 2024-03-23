import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./Home.vue";

const routes = [
	{
		path: "/calculadora",
		component: HomeView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
