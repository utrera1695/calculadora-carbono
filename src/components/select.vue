<script setup lang="ts">
	import { computed, reactive } from "vue";
	const {
		title,
		inputName,
		options,
		rounded,
		color,
		variant,
		required = false,
		modelValue,
	} = defineProps({
		title: String,
		inputName: String,
		options: Array<String>,
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
	<div class="select-group">
		<label for="" :class="`${required && 'required'}`">{{ title }}</label>
		<select
			:value="modelValue"
			@input="emit('update:modelValue', $event.target?.value)"
			:class="`${variant} ${rounded}`"
		>
			<option v-for="(option, index) of options" :value="index">
				{{ option }}
			</option>
		</select>
	</div>
</template>

<style scoped>
	.select-group {
		display: grid;
		margin: 1rem 0px;
		position: relative;
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
	select {
		padding: 10px 1rem;
		font-size: 14px;
		outline: 2px solid transparent;
		cursor: pointer;
		-moz-appearance: none !important;
		-webkit-appearance: none !important;
		appearance: none !important;
		transition: all ease 0.3s;
		border: 1px solid transparent;
	}
	.select-group::before {
		content: "";
		background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
			no-repeat;
		background-position: calc(100% - 0.75rem) center !important;
		padding-right: 2rem !important;
		position: absolute;
		height: 20px;
		bottom: 7px;
		right: 0px;
		z-index: 1;
		transition: all ease 0.3s;
	}
	.outline {
		border: 1px solid v-bind("backColor");
	}
	.filled {
		background-color: v-bind("backColor");
	}
	select:focus-visible {
		background-color: white;
		outline: 2px solid v-bind("color");
	}
	.select-group:has(> select:focus-visible)::before {
		transform: rotate(180deg);
	}
</style>
