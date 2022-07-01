<script lang="ts">
	import * as signalR from '@microsoft/signalr';

	let gameStarted = false;
	export let myHP = 100;
	export let enemyHP = 100;
	export let victory = false;
	export let defeat = false;

	const connection = new signalR.HubConnectionBuilder()
		.withUrl('http://localhost:5248/hub', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
		.build();

	connection.start().catch((err) => console.log(err));

    connection.on('gameStarted', (username: string) => {
		gameStarted = true;
	});

	connection.on('attackRecieved', (hp: number) => {
		myHP = hp;
		if (myHP <= 0) {
			defeat = true;
		}
	});

	connection.on('attackCompleted', (hp: number) => {
		enemyHP = hp;
		if (enemyHP <= 0) {
			victory = true;
		}
	});
    
	export function startGame() {
		connection.send('startGame', '123');
	}

	export function attack() {
		connection.send('newAttack', enemyHP);
	}

</script>
{#if !victory && !defeat}
	{#if gameStarted}
	<div class="px-6 mt-16">
		<p class="text-yellow-100 text-sm text-center">Your HP: {myHP}</p>
		<p class="text-yellow-100 text-sm text-center">Enemy HP: {enemyHP}</p>
		<button
		on:click={() => attack()}
		type="button"
		class="w-full uppercase bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
		>Attack</button
	>
	</div>

	{:else}
	<div class="px-6 mt-16">
		<p class="text-yellow-100 text-sm text-center">Wait for game to start or start yourself</p>
		<button
			on:click={() => startGame()}
			type="button"
			class="w-full uppercase bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
			>Start game</button
		>
	</div>
	{/if}
{:else if victory}
	<div class="px-6 mt-16">
		<p class="text-yellow-100 text-sm text-center">You won!</p>
	</div>
{:else if defeat}
	<div class="px-6 mt-16">
		<p class="text-yellow-100 text-sm text-center">You lost!</p>
	</div>
{/if}



