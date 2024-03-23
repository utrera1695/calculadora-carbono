<script setup lang="ts">
	import { reactive } from "vue";
	const props = defineProps<{
		title: string;
		type?: "submit" | "reset" | "button" | undefined;
		variant: string;
		color: string;
		rounded: string;
		icon: string;
	}>();
	const { title, type, variant, color, rounded, icon } = props;
</script>

<template>
	<button :type="type" :class="`${variant} ${rounded}`">
		<span :v-if="icon" class="material-symbols-outlined"> {{ icon }} </span>
		{{ title }}
	</button>
</template>

<style scoped>
	button {
		font-weight: bold;
		padding: 10px 1rem;
		font-size: 16px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all ease 0.3s;
	}
	button:disabled {
		opacity: 0.3 !important;
		transform: scale(1) !important;
	}
	.solid {
		color: white;
		background-color: v-bind("color");
		border: none;
	}
	button.solid:hover {
		opacity: 0.7;
	}
	button.solid:active {
		transform: scale(0.95);
	}
	.border {
		color: v-bind("color");
		background-color: white;
		border: 2px solid v-bind("color");
	}
	button.border:hover {
		background-color: rgb(247, 247, 247);
	}
	button.border:active {
		transform: scale(0.95);
	}
	button span {
		font-size: 22px;
		margin-right: 10px;
	}
</style>
