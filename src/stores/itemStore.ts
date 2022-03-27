import { writable } from 'svelte/store';

const itemsUrl = 'https://localhost:7248/api/Items'

export class Item {
    name: string;
    level: number;
    description: string;
    price: number;
    constructor(name: string, level: number, price: number, description: string) {
        this.level = level;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

export class PlayerItem{
    id: number;
    itemName: string;
    level: number;
    ammount: number;
    isEquiped: boolean;
    price: number;
    description: string;
    constructor(id?: number, itemName?: string, level?: number, ammount?:number, isEquiped?: boolean, price?: number, description?: string) {
        this.id = id ?? 0;
        this.level = level ?? 1;
        this.itemName = itemName ?? '';
        this.price = price ?? 0;
        this.ammount = ammount ?? 0;
        this.isEquiped = isEquiped ?? false;
        this.description = description ?? '';
    }
}

export let playerItemData = writable([])
export let selectedPlayerItemData = writable(new PlayerItem())

export const loadPlayerItemData = async () => {
    try{
        const response = await fetch(`${itemsUrl}/GetPlayerItems`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        if (response.ok) {
            playerItemData.set(await response.json() as PlayerItem[])
        }
    }
    catch (e) {
        // console.log(e)
    }
}

loadPlayerItemData();