import { NextResponse } from 'next/server';
import {url} from '../config'
import { Building } from '@/app/objects/building.type';
import { IData } from '@/app/objects/[id]/object.type';
import { GeneralAttribute } from '@/components/attributes/types'

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
        if(data && data?.building && data.building?.attributes){
            let attributes: Partial<GeneralAttribute>[] = []
            let usedID: number[] = [];
            data.building.attributes.reverse().forEach((attribute_value) => {
                if(!usedID.includes(attribute_value.attribute_id) && attribute_value.attribute.attr_type > 0){
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
                    usedID.push(attribute_value.attribute_id)
                }
            })
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
