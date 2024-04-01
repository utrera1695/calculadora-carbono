<script setup lang="ts">
	const props = defineProps([
		"title",
		"value",
		"rounded",
		"image",
		"variant",
		"color",
		"id",
	]);

	const { title, value, rounded, image, variant, color, id } = props;
</script>

<template>
	<div :class="`card ${rounded} ${variant}`">
		<img :src="image" alt="icon" />
		<span :id="id">{{ value }}</span>
		<h4>{{ title }}</h4>
	</div>
</template>

<style scoped>
	@property --percent {
		syntax: "<number>";
		initial-value: 0;
		inherits: false;
	}
	@property --temp {
		syntax: "<number>";
		initial-value: 0;
		inherits: false;
	}
	@property --v1 {
		syntax: "<integer>";
		initial-value: 0;
		inherits: false;
	}
	@property --v2 {
		syntax: "<integer>";
		initial-value: 0;
		inherits: false;
	}
	.card {
		padding: 1rem 2rem;
		box-shadow: 0px 0px 20px 0px #dfdfdf;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 200px;
	}
	.card h4 {
		margin: 0px;
		font-weight: normal;
	}
	.card span {
		font-size: 3rem;
		/* transition: --percent 1s;
		--temp: calc(var(--percent) * 100);
		--v1: max(var(--percent) - 0.5, 0);
		--v2: max((var(--percent) - var(--v1)) * 100, 0);
		counter-reset: v1 var(--v1) v2 var(--v2); */
		color: v-bind("color");
		font-weight: bold;
	}
	/* .card span::before {
		content: counter(v1) "." counter(v2, decimal-leading-zero);
	} */
	.card img {
		width: 5rem;
		margin-bottom: 1rem;
		height: auto;
	}
	.filled {
		background-color: v-bind("color");
	}
	.filled h4,
	.filled span {
		color: white;
	}
	.filled img {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(261deg)
			brightness(112%) contrast(101%);
	}
</style>
