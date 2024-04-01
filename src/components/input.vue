<script setup lang="ts">
	import { computed, reactive } from "vue";
	import { useRoute, useRouter } from "vue-router";
	const { query } = useRoute();
	const font = query.font || "Poppins";
	const {
		title,
		rounded,
		color,
		variant,
		required = false,
		modelValue,
	} = defineProps({
		title: String,
		rounded: String,
		color: String,
		variant: String,
		required: Boolean,
		modelValue: { required: true },
	});
	const backColor = variant === "filled" ? color.concat("30") : color;

	const emit = defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="input-group">
		<label for="" :class="`${required && 'required'}`">{{ title }}</label>
		<input
			:value="modelValue"
			@input="emit('update:modelValue', $event.target.value)"
			:class="`${rounded} ${variant}`"
			type="number"
			min="0"
		/>
	</div>
</template>
<style scoped>
	label,
	select,
	button,
	input {
		font-family: v-bind("font"), sans-serif;
	}
	.input-group {
		display: grid;
		margin: 1rem 0px;
	}
	label {
		font-size: 14px;
		margin: 0.5rem 0px;
	}
	label.required::after {
		content: "*";
		color: red;
		margin-left: 5px;
	}
	input {
		padding: 10px 1rem;
		font-size: 14px;
		transition: all ease 0.3s;
		outline: 2px solid transparent;
		border: 1px solid transparent;
	}
	input:focus-visible {
		background-color: white;
		outline: 2px solid v-bind("color");
		border: 1px solid transparent;
	}
	.outline {
		border: 1px solid v-bind("backColor");
	}
	.filled {
		background-color: v-bind("backColor");
	}
</style>
