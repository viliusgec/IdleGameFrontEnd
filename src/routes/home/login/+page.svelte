<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { User, userData, login } from '../../../stores/userStore';
	export let username: string = '', password: string = '';
	userData.subscribe((value) => login(value as User));
</script>

<div class="h-screen font-sans login bg-cover">
	<div class="container mx-auto h-full flex flex-1 justify-center items-center">
		<div class="w-full max-w-lg">
			<div class="leading-loose">
				<form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
					<p class="text-white text-center text-lg font-bold">LOGIN</p>
					<div class="">
						<label class="block text-sm text-white" for="email">Username</label>
						<input
							bind:value={username}
							class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
							type="text"
							id="email"
							placeholder="Enter email"
							aria-label="email"
							required
						/>
					</div>
					<div class="mt-2">
						<label for="password" class="block  text-sm text-white">Password</label>
						<input
							bind:value={password}
							class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
							type="password"
							id="password"
							placeholder="Enter password"
							arial-label="password"
							required
						/>
					</div>

					<div class="mt-4 items-center flex justify-between">
						<button
							on:click={() => {
								userData.set(new User(username, password));
							}}
							type="button"
							class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
							>Login</button
						>
						<a
							class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
							href="/">Forgot password ?</a
						>
					</div>
					<div class="text-center">
						<a
							href="/"
							class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
						>
							Register
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.login {
		/*
        background: url('https://tailwindadmin.netlify.app/dist/images/login-new.jpeg');
      */
		background: url('https://i.pinimg.com/originals/50/19/4b/50194b7860774d22f17c0bb2518f3bcd.png');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
