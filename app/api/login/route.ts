import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import urlCodeJson from 'urlcode-json';
import {url} from '../config.ts'

export async function POST(request: Request) {
    const reqBody = await urlCodeJson.decode(await request.text());
    console.log(reqBody)
    if(reqBody.email === undefined || reqBody.password === undefined) redirect('/login');
    const res = await fetch(url + 'auth/auth-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": reqBody.email,
            "password_hash": reqBody.password
        })
    });
    if(!res.ok || res.status!== 200) {
        redirect('/login');
    }
    console.log('res successful')
    try {
        // console.log(await res.text())
        const data = await res.json();
        console.log(data)
        if(data.token !== undefined) {
            NextResponse.next().cookies.set('token', data.token);
            console.log('success');
            // console.log(data.token)
            return NextResponse.redirect(new URL('/auth?token=' + data.token, request.url));
        }   
        redirect('/login');
        // redirect('/')
        return NextResponse.json({hello: 'world'});
    }
    catch (e) {
        console.log(e);
        redirect('/login');
    }
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}
