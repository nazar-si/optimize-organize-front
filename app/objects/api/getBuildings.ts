import { url } from '../../api/config'

export default async function getBuildings () {
    const res = await fetch(url + 'buildings/get-buildings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            filters: [],
            attribute_ids: [1]
        })
    })
    if(!res.ok) {
        return -1;
    }
    try {
        const data = await res.json();
        if(data && data.buildings) {
            console.log(data.buildings);
        }
    }
    catch(e) {
        console.log(e);
        return -2;
    }
}