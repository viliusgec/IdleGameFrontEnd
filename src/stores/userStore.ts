import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

const userUrl = 'https://localhost:7248/api/Users'

export class User {
    username:string;
    password:string;
    constructor(uname: string, pass: string) {
        this.username = uname;
        this.password = pass;
      }
}

export class Token {
    token : string
}

export let userData = writable(new User('',''))

export async function login(user: User){
    if(user.password !== '' && user.username !== ''){
        console.log(JSON.stringify(user))
        const response = await fetch(`${userUrl}/Login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (response.status === 404) {
            console.log("bad pass")
        }
        if (response.ok) {
            const token : Token = await response.json()
            console.log(token)
            localStorage.setItem('token', token.token)
            userData.set(new User('',''))
            goto('/')
        }
    } 
}