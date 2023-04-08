import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function POST(request: Request) {
    
    // redirect('/')
    // const res = await request.json();
    console.log(await request.json());
    return NextResponse.json({hello: 'world'});
}
