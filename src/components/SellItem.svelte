<script lang="ts">
	import { PlayerItem, selectedPlayerItemData, sellItem } from '../stores/itemStore';
	export let playerItem;
	export let number: number = 0;
	export function sellItems() {
		sellItem(playerItem, number)
		console.log(number);
		console.log($selectedPlayerItemData);
	}
	export function cancel() {
		selectedPlayerItemData.set(new PlayerItem());
	}
</script>

<section>
	<h2>Sell: {playerItem.itemName}</h2>
	<div>
		<input type="number" bind:value={number} min="0" max={playerItem.ammount} />
	</div>
	<div>
		<input type="range" bind:value={number} min="0" max={playerItem.ammount} />
	</div>
</section>
<button
	on:click={() => sellItems()}
	type="button"
	class="w-full uppercase bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
	>Sell</button
>
<button
	on:click={() => cancel()}
	type="button"
	class="w-full uppercase bg-red-700 text-white px-6 py-2 rounded font-medium mx-3 transition duration-200 each-in-out"
	>Cancel
</button>
