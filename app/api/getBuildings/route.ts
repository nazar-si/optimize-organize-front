import { NextResponse } from 'next/server';
import {url} from '../config'
import { Building } from '@/app/objects/building.type';
import { IData } from '@/app/objects/[id]/object.type';

export async function POST(request: Request) {
    const reqBody = await request.json()
    const res = await fetch(url + 'buildings/get-buildings', {
        mode: 'cors',
        credentials: "include",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + reqBody.token,
            Authorization: 'Bearer ' + reqBody.token,
        },
        body: JSON.stringify({
            filters: [],
            attribute_ids: [-1, -2, -3, -4, -5, -6, -7, -8, -9]
        })
    })
    if(!res.ok || res.status!== 200) {
        return NextResponse.json({status: res.status, message: res.statusText});
    }
    try {
        const data: {buildings: Building[]} = await res.json();
        if(data && data.buildings) {
            let buildings: Array<Partial<IData>> = []
            data.buildings.forEach((building: Building) => {
                buildings.push({
                    id: building.ID,
                    name: building.attributes?.find(obj => {return obj.attribute.attr_type == -1})?.data,
                    description: building.attributes?.find(obj => {return obj.attribute.attr_type == -2})?.data,
                    rating: building.attributes?.find(obj => {return obj.attribute.attr_type == -7})?.data,
                    location: building.attributes?.find(obj => {return obj.attribute.attr_type == -4})?.data,
                    region: building.attributes?.find(obj => {return obj.attribute.attr_type == -5})?.data,
                    owner: building.attributes?.find(obj => {return obj.attribute.attr_type == -3})?.data,
                    type: building.attributes?.find(obj => {return obj.attribute.attr_type == -8})?.data,
                    imageUrl: building.attributes?.find(obj => {return obj.attribute.attr_type == -9})?.data,
                });
            })
            return NextResponse.json(buildings);
        }
    }
    catch (e) {
        return NextResponse.json({status: res.status, message: res.statusText});
    }
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}
