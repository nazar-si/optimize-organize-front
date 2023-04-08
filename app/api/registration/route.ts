import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import apiConfig from '/api.config.js';

export async function POST(request: Request) {
    // const res = await fetch(apiConfig.url + 'users/create-user', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: {

    //     }
    // });
    redirect('/')

    // return NextResponse.json(request.json());
}

