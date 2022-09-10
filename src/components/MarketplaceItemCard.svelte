<script lang="ts">
    import { selectedPlayerItemData } from '../stores/itemStore'
import BuyItem from './BuyItem.svelte';
    export let playerItem;
    export function selectItem(){
		selectedPlayerItemData.set(playerItem)
	}
</script>
<!-- Insert selling part into item card. Press SELL -> show ammount bar -> choose ammount and press SELL again  -->
<div class="card w-64 bg-base-100 shadow-xl image-full">
	<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
	<div class="card-body">
	  <h1 class="text-4xl card-title">{playerItem.itemName}</h1>
	  <p class="text-2xl">Ammount: {playerItem.ammount}</p>
	  {#if $selectedPlayerItemData.itemName == playerItem.itemName}
<div>	
    <BuyItem playerItem={$selectedPlayerItemData} />
</div>
{:else}
<div class="card-actions justify-end">
	<button on:click={()=>selectItem()} class="btn btn-primary">Buy Now</button>
  </div>
{/if}

	</div>
  </div>
