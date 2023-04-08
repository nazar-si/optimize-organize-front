import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import urlCodeJson from 'urlcode-json';
import {url} from '../config'

export async function POST(request: Request) {
    const reqBody = urlCodeJson.decode(await request.text());
    // console.log(reqBody);
    // console.log(typeof reqBody)
    if(reqBody.login === undefined || reqBody.password === undefined || reqBody.name === undefined || reqBody.email === undefined) { 
        redirect('/signup');
    }
    // console.log(1)
    // console.log({
    //     login: reqBody.login,
    //     password: reqBody.password,
    //     name: reqBody.name,
    //     email: reqBody.email
    // })
    // console.log(2)
    // console.log(JSON.stringify({
    //     login: reqBody.login,
    //     password: reqBody.password,
    //     name: reqBody.name,
    //     email: reqBody.email
    // }))
    // console.log(url + 'users/create-user');
    const res = await fetch(url + 'users/create-user', {
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
        // console.log(await res.text())
        const data = await res.json();
        if(data.id !== undefined) {
            console.log('success reg', data.id);
            redirect('/login');
        }
        redirect('/signup');
        // redirect('/')
    }
    catch (e) {
        // console.log(e);
        redirect('/signup');
    }
}

