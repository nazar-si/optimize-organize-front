import { NextResponse } from 'next/server';
import {url} from '../config'
import { Building } from '@/app/objects/building.type';
import { IData } from '@/app/objects/[id]/object.type';

export async function POST(request: Request) {
    const reqBody = await request.json(); 
    const res = await fetch(url + 'buildings/get-building-byid/' + reqBody.id, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + reqBody.token
        },
        redirect: 'follow'
    })
    if(!res.ok || res.status!== 200) {
        return NextResponse.json({status: res.status, message: res.statusText});
    }
    try {
        const data: {building: Building} = await res.json();
        if(data && data.building) {
            let building: Partial<IData> = {
                id: data.building.ID,
                name: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -1})?.data,
                description: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -2})?.data,
                rating: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -7})?.data,
                location: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -4})?.data,
                region: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -5})?.data,
                owner: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -3})?.data,
                type: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -8})?.data,
                imageUrl: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -9})?.data,
            }
            return NextResponse.json(building);
        }
    }
    catch (e) {
        return NextResponse.json({status: res.status, message: res.statusText});
    }
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}


// const res = await fetch(url + 'buildings/get-building-byid/2', {
//     method: 'GET',
//     headers: {
//       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2ODEyMzE4MDUsImlhdCI6MTY4MTA1OTAwNX0.VrAWDNX1ENDNXX5xVFAxUP4ZP-2HFCC4hg1lg39pwTQ"
//     },
//     redirect: 'follow'
//   })
//   if(!res.ok || res.status!== 200) {
//     return {name: "Неизвестная ошибка"};
//   }
//   try {
//       const data: {building: Building} = await res.json();
//       if(data && data.building) {
//           let building: Partial<IData> = {
//               id: data.building.ID,
//               name: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -1})?.data,
//               description: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -2})?.data,
//               rating: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -7})?.data,
//               location: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -4})?.data,
//               region: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -5})?.data,
//               owner: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -3})?.data,
//               type: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -8})?.data,
//               imageUrl: data.building.attributes?.find(obj => {return obj.attribute.attr_type == -9})?.data,
//           }
//           return building;
//       }
//   }
//   catch (e) {
//     return {name: "Неизвестная ошибка 2"};
//   }