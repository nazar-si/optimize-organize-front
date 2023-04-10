import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
const urlCodeJson = require('urlcode-json');
import {url} from '../config'

export async function POST(request: Request) {
    const reqBody = urlCodeJson.decode(await request.text());
    if(reqBody.login === undefined || reqBody.password === undefined || reqBody.name === undefined || reqBody.email === undefined) { 
        redirect('/signup');
    }
    const res = await fetch(url + 'users/create-user', {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: reqBody.login,
                password_hash: reqBody.password,
                firstname: reqBody.name,
                email: reqBody.email
            }
        })
    });
    if(!res.ok || res.status!== 200) {
        redirect('/signup');
    }
    try {
        const data = await res.json();
        if(data.id !== undefined) {
            redirect('/login');
        }
        redirect('/signup');
        // redirect('/')
    }
    catch (e) {
        redirect('/signup');
    }
}

