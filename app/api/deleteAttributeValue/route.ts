import { url } from '../config'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const reqBody = await request.json();
    console.log(reqBody);
    const res = await fetch(url + 'buildings/set-building-attribute-value', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": "Bearer " + reqBody.token
            "Authorization": "Bearer " + reqBody.token
        },
        body: JSON.stringify({
            "attribute_value": {
                "attribute_id": reqBody.attribute_id,
                "building_id": reqBody.building_id,
                "data": "!!deleted"
            }
        })
    })
    console.log(await res.text())
    console.log(res.status)
    return NextResponse.json({status: res.status})
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}
