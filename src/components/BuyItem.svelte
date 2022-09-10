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
<!-- Make it similar to ItemCard sell -->
<section>
	<div>
		<input class="input input-bordered input-primary input-sm w-full max-w-xs" type="number" bind:value={number} min="0" max={playerItem.ammount} />
	</div>
	<div>
		<input type="range"class="range" bind:value={number} min="0" max={playerItem.ammount} />
	</div>
</section>
<button
	on:click={() => cancel()}
	type="button"
	class="w-1/3 uppercase bg-red-700 btn"
	>Cancel
</button>
<button
	on:click={() => sellItems()}
	type="button"
	class="w-1/3 uppercase bg-gray-700 btn"
	>Buy</button
>
