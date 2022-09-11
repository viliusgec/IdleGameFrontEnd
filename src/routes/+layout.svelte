<script>
	import '../tailwind.css';
	import '../app.css';
	import Nav from '../components/NavigationBar.svelte'
	import VerticalNavbar from '../components/VerticalNavbar.svelte';
</script>
<svelte:head>
	<title>Shit Game</title>
</svelte:head>

<Nav/>

<div class="min-h-screen flex flex-row bg-cover" style="background-image: url('https://i.pinimg.com/originals/50/19/4b/50194b7860774d22f17c0bb2518f3bcd.png')">
	<!-- <div class="min-h-screen flex flex-row bg-cover" style="background-image: url('../background.png')">-->
		<VerticalNavbar/>
		<slot />
</div>
