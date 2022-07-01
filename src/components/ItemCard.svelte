<script lang="ts">
    import { selectedPlayerItemData } from '../stores/itemStore'
    export let playerItem;
    export function selectItem(){
		selectedPlayerItemData.set(playerItem)
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
	<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
	<div class="card-body">
	  <h1 class="text-4xl card-title">{playerItem.itemName}</h1>
	  <p class="text-2xl">Ammount: {playerItem.ammount}</p>
	  <div class="card-actions justify-end">
		<button on:click={()=>selectItem()} class="btn btn-primary">Sell Now</button>
	  </div>
	</div>
  </div>
