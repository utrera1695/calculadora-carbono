<script setup lang="ts">
	import { reactive } from "vue";
	import Button from "./button.vue";
	import Input from "./input.vue";
	import Select from "./select.vue";
	import { useRoute, useRouter } from "vue-router";
	const { query } = useRoute();

	const COMBUSTIBLE = ["Gasolina", "Diésel", "No estoy seguro"];
	const VIAJES = ["Solo ida", "Ida y vuelta"];
	const COMBUSTIBLE_VALUES = [0.192, 0.171, 0.181];
	const CO2TOPRICE = 0.015;
	/*  */
	const buttonColors = query.buttonColors
		? "#" + query.buttonColors
		: "#f8ae53";
	const buttonRounded = query.buttonRounded || "rounded-med";
	const buttonVariant = query.buttonVariant || "solid";

	const inputColor = query.inputColor ? "#" + query.inputColor : "#f8ae53";
	const inputRounded = query.inputRounded || "rounded-med";
	const inputVariant = query.inputVariant || "outline";
	const data = reactive({
		distancia: "",
		personas: "",
		noches: "",
		combustible: 0,
		viajes: 0,
	});
	const animateValue = (
		obj: any,
		start: number,
		end: number,
		icon: string,
		duration: 1000
	) => {
		let startTimestamp: any = null;
		const step = (timestamp: any) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = (progress * (end - start) + start).toFixed(2) + icon;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};
	const calculateData = (e: any) => {
		e.preventDefault();
		const cottage_consume = 9;
		const result =
			cottage_consume * parseInt(data.noches) * parseInt(data.personas) +
			(data.viajes + 1) *
				parseInt(data.distancia) *
				parseInt(data.personas) *
				COMBUSTIBLE_VALUES[data.combustible];

		const co2Value = document.getElementById("co2_value");
		const precioValue = document.getElementById("precio_value");
		document.getElementById("result-container")?.classList.add("show");
		console.log(result);
		if (co2Value) {
			animateValue(
				co2Value,
				parseFloat(co2Value.textContent || "0.00"),
				result,
				"",
				1000
			);
		}
		if (precioValue)
			animateValue(
				precioValue,
				parseFloat(precioValue.textContent || "0.00"),
				result * CO2TOPRICE,
				"€",
				1000
			);
		const position = document.getElementById("result-container")?.offsetTop;
		// smooth scroll
		window.scrollTo({ top: position, behavior: "smooth" });
	};
</script>

<template>
	<section>
		<form :onsubmit="calculateData">
			<Input
				title="Distancia en km"
				:variant="inputVariant"
				:rounded="inputRounded"
				:color="inputColor"
				v-model="data.distancia"
				required
			/>
			<Input
				v-model="data.personas"
				title="Número de personas"
				:variant="inputVariant"
				:rounded="inputRounded"
				:color="inputColor"
				required
			/>
			<Input
				v-model="data.noches"
				title="Número de noches"
				:variant="inputVariant"
				:rounded="inputRounded"
				:color="inputColor"
				required
			/>
			<Select
				v-model="data.combustible"
				:options="COMBUSTIBLE"
				title="Tipo de combustible"
				:variant="inputVariant"
				:rounded="inputRounded"
				:color="inputColor"
				required
			/>
			<Select
				v-model="data.viajes"
				:options="VIAJES"
				title="Número de viajes"
				:variant="inputVariant"
				:rounded="inputRounded"
				:color="inputColor"
				required
			/>
			<Button
				type="submit"
				title="Calcular"
				:rounded="buttonRounded"
				:variant="buttonVariant"
				:color="buttonColors"
				:disabled="
					data.distancia === '' || data.noches == '' || data.personas == ''
				"
				icon="calculate"
			/>
		</form>
	</section>
</template>
