import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import urlCodeJson from 'urlcode-json';
import {url} from '../config.ts'

export async function POST(request: Request) {
    
    // redirect('/')
    // const res = await request.json();
    // console.log(request);
    const text = await request.text();
    return NextResponse.json({body: urlCodeJson.decode(text)});
}
