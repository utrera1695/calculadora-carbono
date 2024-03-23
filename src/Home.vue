<script setup lang="ts">
	import Form from "./components/form.vue";
	import Result from "./components/result.vue";
	import { useRoute, useRouter } from "vue-router";
	const { query } = useRoute();
	const font = query.font || "Poppins";
</script>

<template>
	<main>
		<div class="logo">
			<img src="@/assets/logo-cabanas.png" alt="logo cabanas" />
		</div>
		<h3>
			Cabañas en árboles te ayuda a saber la huella de carbono que se produce en
			tus viajes
		</h3>
		<div class="container">
			<Form />
			<Result />
		</div>
	</main>
</template>

<style scoped>
	main {
		margin: auto;
		padding: 1rem;
		width: 80rem;
		max-width: calc(100% - 2rem);
		font-family: v-bind("font"), sans-serif;
	}
	section {
		width: 100%;
	}
	.container {
		display: flex;
		gap: 3rem;
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 3rem auto;
	}
	h3 {
		text-align: center;
	}
	p {
		text-align: center;
	}
	/* X-Small devices (portrait phones, less than 576px) */
	@media (max-width: 575.98px) {
		.container {
			flex-direction: column;
		}
	}

	/* // Small devices (landscape phones, less than 768px) */
	@media (max-width: 767.98px) {
		.container {
			flex-direction: column;
		}
	}

	/* // Medium devices (tablets, less than 992px) */
	@media (max-width: 991.98px) {
		.container {
			flex-direction: column;
		}
	}

	/* // Large devices (desktops, less than 1200px) */
	@media (max-width: 1199.98px) {
	}

	/* // X-Large devices (large desktops, less than 1400px) */
	@media (max-width: 1399.98px) {
	}
</style>
