<script lang="ts">
	import MarketplaceItemCard from '../components/MarketplaceItemCard.svelte';
    import { playerItemData, loadPlayerItemData, PlayerItem } from '../stores/itemStore'
    loadPlayerItemData();
</script>

<div class="px-0 pt-5">
    <button class="btn glass">SELL YOUR ITEM</button>
</div>
<!-- Create proper layout. Sort items by name -->
<!-- <div class="mb-16"> -->
	<dh-component>
		<div class="container mx-auto">
			<div
				role="list"
				class="lg:flex px-0 pt-5 md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
			>
				{#each $playerItemData as playerItem}
                    <MarketplaceItemCard playerItem={playerItem} />
				{/each}
			</div>
		</div>
	</dh-component>
<!-- </div> -->
