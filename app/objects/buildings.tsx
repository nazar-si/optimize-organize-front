import { url } from '../api/config'
import style from "./page.module.css";
import Entry from "@/components/objects/register/Entry";

export async function getData() {
    const res = await fetch(url + 'buildings/get-buildings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            filters: [],
            attribute_ids: [-1, -2, -3, -4, -5, -6, -7]
        })
    })
    if(!res.ok) {
        return {buildings: []};
    }
    try {
        const data = await res.json();
        if(data && data.buildings) {
            console.log(data.buildings);
            return { buildings: data.buildings };
        }
    }
    catch(e) {
        console.log(e);
        return {buildings: []};
    }
    return { buildings: []};
}

export default async function Buildings() {
    const data = await getData();
    return (
        <div>
            <h1>Buildings</h1>
            <div className={style.list}>
            {data.buildings.map((d, i) => (
                <Entry key={i} data={d}></Entry>
            ))}
            </div>
            {/* <ul>
                {props.buildings.map(building => {
                    return (
                        <li key={building.id}>
                            {building.name}
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}