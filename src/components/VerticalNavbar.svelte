<script lang="ts">
	import { Skill, playerSkillData } from '../stores/skillStore';
	export let skills: Skill[] = []
	playerSkillData.subscribe((value) => {skills = value});
</script>

<div class="flex flex-col w-56 bg-white overflow-hidden">
    {#each skills as skill}
    <ul class="flex flex-col py-4">
        <li>
            <a
                href="/{skill.name}"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
                    ><i class="bx bx-home" /></span
                >
                <span class="text-sm font-medium">{skill.name} : {skill.experience}</span>
            </a>
        </li>
    </ul>
    {/each}
</div>