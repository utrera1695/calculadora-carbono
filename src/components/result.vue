<script setup lang="ts">
	import co2 from "@/assets/nube-de-co2.png";
	import euro from "@/assets/euro.png";
	import Card from "./card.vue";
	import { useRoute, useRouter } from "vue-router";
	const { query } = useRoute();
	const cardColors = query.cardColors ? "#" + query.cardColors : "#f8ae53";
	const cardRounded = query.cardRounded || "rounded-med";
	const cardVariant = query.cardVariant || "smooth";
</script>
<template>
	<div class="result-container" id="result-container">
		<Card
			id="co2_value"
			title="CO2 generado"
			:rounded="cardRounded"
			value=""
			:image="co2"
			:variant="cardVariant"
			:color="cardColors"
		/>
		<Card
			id="precio_value"
			title="Precio equivalente"
			:rounded="cardRounded"
			value="€"
			:image="euro"
			:variant="cardVariant"
			:color="cardColors"
		/>
	</div>
</template>
<style scoped>
	.result-image {
		width: 5rem;
		height: auto;
	}
	.result-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin: 2rem 0px;
		width: 100%;
	}
	h3 {
		text-align: center;
	}
</style>
