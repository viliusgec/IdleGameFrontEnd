import { writable } from 'svelte/store';
import { loadPlayerData } from './playerStore'

const itemsUrl = 'https://localhost:7248/api/Items'

export class Item {
    name: string;
    level: number;
    description: string;
    price: number;
    isSellable: boolean
    constructor(name: string, level: number, price: number, description: string, isSellable: boolean) {
        this.level = level;
        this.name = name;
        this.price = price;
        this.description = description;
        this.isSellable = isSellable;
    }
}

export class PlayerItem {
    id: number;
    itemName: string;
    level: number;
    ammount: number;
    isEquiped: boolean;
    price: number;
    description: string;
    isSellable: boolean
    constructor(id?: number, itemName?: string, level?: number, ammount?: number,
        isEquiped?: boolean, price?: number, description?: string, isSellable?: boolean) {
        this.id = id ?? 0;
        this.level = level ?? 1;
        this.itemName = itemName ?? '';
        this.price = price ?? 0;
        this.ammount = ammount ?? 0;
        this.isEquiped = isEquiped ?? false;
        this.description = description ?? '';
        this.isSellable = isSellable ?? false;
    }
}

export let playerItemData = writable([])
export let selectedPlayerItemData = writable(new PlayerItem())

export const loadPlayerItemData = async () => {
    try {
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

export const sellItem = async (item:PlayerItem, ammount: number) => {
    console.log(item)
    const response = await fetch(`${itemsUrl}/SellPlayerItems?sellAmmount=${ammount}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(item)
    });
    if (response.status === 404 || response.status === 400) {
        console.log("Can not sell")
    }
    if (response.ok) {
        loadPlayerItemData();
        loadPlayerData();
    }
}

loadPlayerItemData();