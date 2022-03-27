import { writable } from 'svelte/store';

const playerUrl = 'https://localhost:7248/api/Players'

export class Player {
    username: string;
    money: number;
    InventorySpace: number;
    isInBattle: boolean;
    isInAction: boolean;
    constructor(username: string, money: number, InventorySpace: number, isInBattle: boolean, isInAction: boolean) {
        this.username = username;
        this.money = money;
        this.InventorySpace = InventorySpace;
        this.isInBattle = isInBattle;
        this.isInAction = isInAction;
    }
}

export let playerData = writable(new Player('', 0, 0, false, false))

export const loadPlayerData = async () => {
    try{
        const response = await fetch(`${playerUrl}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        if (response.ok) {
            playerData.set(await response.json() as Player)
        }
    }
    catch {

    }
}

loadPlayerData();