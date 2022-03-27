import { writable } from 'svelte/store';
import { loadPlayerData } from './playerStore';

const skillUrl = 'https://localhost:7248/api/Skills'

export class Skill {
    id: number;
    name: string;
    experience: number;
    constructor(id: number, name: string, experience: number) {
        this.id = id;
        this.name = name;
        this.experience = experience;
    }
}

export let playerSkillData = writable([])

export const loadPlayerSkillData = async () => {
    try{
        const response = await fetch(`${skillUrl}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        if (response.ok) {
            playerSkillData.set(await response.json() as Skill[])
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const trainSkill = async (trainingSkill:Skill) => {
    const response = await fetch(`${skillUrl}/TrainSkill`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(trainingSkill)
    });
    if (response.status === 404) {
        console.log("Training failed")
    }
    if (response.ok) {
        loadPlayerSkillData();
    }
}

loadPlayerSkillData();