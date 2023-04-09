import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import urlCodeJson from 'urlcode-json';
import {url} from '../config'

export async function POST(request: Request) {
    const reqBody = await urlCodeJson.decode(await request.text());
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
    try {
        const data = await res.json();
        if(data.token !== undefined) {
            // NextResponse.next().cookies.set('token', data.token);
            console.log('success');
            // console.log(data.token)
            return NextResponse.redirect(new URL('/auth?token=' + data.token, request.url));
        }   
        redirect('/login');
        // redirect('/')
        return NextResponse.json({hello: 'world'});
    }
    catch (e) {
        redirect('/login');
    }
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}
