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
			Una experiencia con impacto positivo: Calcula y compensa la huella de
			carbono de tu viaje
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
	label,
	select,
	button,
	input {
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
</style>
