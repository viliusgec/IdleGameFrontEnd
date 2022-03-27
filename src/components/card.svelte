<script lang="ts">
	import Modal,{getModal} from './Modal.svelte'
	import { Skill, trainSkill, playerSkillData } from '../stores/skillStore';

    export let skill;
	export let skillName: string;
	export let skillInfo: Skill = new Skill(0, '', 0);
	playerSkillData.subscribe((value) => {
		skillInfo = value.find(x => x.name === skillName)
	});
</script>

<div
	role="listitem"
	class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
>
	<div class="rounded overflow-hidden shadow-md bg-white">
		<div class="absolute -mt-20 w-full flex justify-center">
			<div class="h-32 w-32">
				<img
					src="https://iheartcraftythings.com/wp-content/uploads/2021/05/How-to-draw-tree-7.jpg"
					alt="Andres Berlin"
					class="rounded-full object-cover h-full w-full shadow-md"
				/>
			</div>
		</div>
		<div class="px-6 mt-16">
			<h1 class="font-bold text-3xl text-center mb-1">{skill.trainingName}</h1>
			<p class="text-gray-800 text-sm text-center">Gives {skill.xpGiven} XP</p>
			<p class="text-center text-gray-600 text-base pt-3 font-normal">
				Drops {skill.givenItem}
			</p>
			<div class="w-full flex justify-center pt-5 pb-5">
				{#if (skill.skillLevelRequired * 10) <= skillInfo.experience}
				<button
					on:click={()=>trainSkill(skill)}
					type="button"
					class="w-full uppercase bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
					>Start action</button
				>
				<Modal>
					<h1>Action started!</h1>
				</Modal>
				{:else}
				<button
				type="button"
				class="w-full uppercase bg-red-700 text-white px-6 py-2 rounded font-medium mx-3 transition duration-200 each-in-out"
				>Level required: {skill.skillLevelRequired} </button
			>
				{/if}
			</div>
		</div>
	</div>
</div>
