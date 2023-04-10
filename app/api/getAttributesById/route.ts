import { NextResponse } from 'next/server';
import {url} from '../config'
import { Building } from '@/app/objects/building.type';
import { IData } from '@/app/objects/[id]/object.type';
import { GeneralAttribute } from '@/components/attributes/types'

export async function POST(request: Request) {
    const reqBody = await request.json(); 
    console.log(reqBody);
    if(!reqBody.token)
        return NextResponse.json({status: 500})
    const res = await fetch(url + 'buildings/get-building-byid/' + reqBody.id, {
        method: 'GET',
        cache: 'no-store',
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
        if(data && data?.building && data.building?.attributes){
            let attributes: Partial<GeneralAttribute>[] = []
            let usedID: number[] = [];
            // console.log(data.building.attributes.sort((a, b) => {
            //     if(a.ID > b.ID) return -1;
            //     return 1
            // }).slice(0, 5))
            data.building.attributes.sort((a, b) => {
                if(a.ID > b.ID) return -1;
                return 1
            }).forEach((attribute_value) => {
                if(!usedID.includes(attribute_value.attribute_id) && attribute_value.attribute.attr_type > 0){
                    if(attribute_value.data.toLowerCase() == "!!deleted" || attribute_value.data.toLowerCase() == "!!deleted!"){
                        usedID.push(attribute_value.attribute_id)
                    }
                    else{
                        let history: GeneralAttribute[] = [];
                        data.building.attributes.filter(attr_to_find => attr_to_find.attribute_id == attribute_value.attribute_id).forEach((history_attribute_value) => {
                            history.push({
                                ID: history_attribute_value.attribute_id,
                                CreatedAt: history_attribute_value.CreatedAt,
                                DeletedAt: history_attribute_value.DeletedAt,
                                UpdatedAt: history_attribute_value.UpdatedAt,
                                name: history_attribute_value.attribute.attr_name,
                                type: history_attribute_value.attribute.attr_type, 
                                data : history_attribute_value.data,
                                edit: true,          
                                permanent: false,     
                                parent: "building"
                            })
                        })
                        attributes.push({
                            ID: attribute_value.attribute_id,
                            CreatedAt: attribute_value.CreatedAt,
                            DeletedAt: attribute_value.DeletedAt,
                            UpdatedAt: attribute_value.UpdatedAt,
                            name: attribute_value.attribute.attr_name,
                            type: attribute_value.attribute.attr_type, 
                            data : attribute_value.data,
                            edit: true,          
                            permanent: false,     
                            parent: "building",
                            history: history
                        })
                        // console.log(attribute_value.attribute_id, usedID)
                        usedID.push(attribute_value.attribute_id)
                    }
                }
            })
            console.log(attributes)
            // console.log(attributes[0].history)
            return NextResponse.json({
                basicData: {
                    name: "MSU"
                },
                attributes: attributes 
            });
        }
    }
    catch (e) {
        return NextResponse.json({status: res.status, message: res.statusText});
    }
    // return NextResponse.json({hello: 'world'});
    // return NextResponse.json({body: urlCodeJson.decode(text)});
}
