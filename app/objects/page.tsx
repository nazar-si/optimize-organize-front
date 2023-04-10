'use client'
import Entry from "@/components/objects/register/Entry";
import style from "./page.module.css";
import { IData } from "./[id]/object.type";
import Header from "@/components/objects/header/Header";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import getBuildings from "./api/getBuildings";
import Buildings from './buildings'
import { url } from '../api/config'
import { useEffect, useState } from "react";
import { token_similarity_sort_ratio } from "fuzzball";



async function getData(token: string) {
  const res = await fetch('/api/getBuildings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token
    })
  })
  if(!res.ok) {
    return [];
  }
  try {
    const data: Array<Partial<IData>> = await res.json();
    return data;
  }
  catch(e) {
    return [];
  }
  return [];
  const data : Array<Partial<IData>> = [
    {
        imageUrl: "https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg",
        name: "Дом на берегу моря",
        type: "Жилое помещение",
        id: 1,
        rating: "55",
        taskCount: 2,
        location: "ул. Колмогорова, 1, Москва",
        region: "Центральный округ",
        owner: "Имя обладателя",
        description: "Результат строительства, представляющий собой объемное надземное строительное сооружение, включающую в себя помещения, предназначенные для проживания и (или) деятельности людей, размещения производства, хранения продукции или содержания животных, а также сети и системы инженерно-технического обеспечения."
    },
    {
        imageUrl: "https://tailwindcss.com/_next/static/media/beach-house-interior-1.f151eb56.jpg",
        name: "Элитные апартаменты",
        type: "Жилое помещение",
        id: 2,
        rating: "100",
        taskCount: 3,
        location: "ул. Амурская, 1Ак3, Москва",
        region: "Округ Гольяново",
        owner: "Level Group",
        description: "Самое элитное помещение, которое можно найти в Москве. Здесь есть все, что только может пожелать ваша душа. Лишь бы для этого были деньги."
    },
  ]
  return data;
}


export default function Home() {
  // window.localStorage.getItem('token')
  const [data, setData] = useState<Array<Partial<IData>>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem('token');
      if(!token && token !== '') {
        window.location.href = '/login';
      }
      else {
        let data = await getData(token)
        // setData(data.sort())
        setData(data)
      }
    }
    fetchData()
  }, [])
  
  // const [searchQuery, setSearchQuery] = useState("");
  // const Search = (value: string)=>{
  //   if(!data || data === undefined || data.length === 0) {
  //     return;
  //   }
  //   setSearchQuery(value);
  //   if (!value) 
  //     data.sort();
  //   let data_copy = data.slice();
  //   data_copy.sort((a, b)=>{
  //     let ac = token_similarity_sort_ratio(value, `${a.description} ${a.owner} ${a.name}`)
  //     let bc = token_similarity_sort_ratio(value, `${b.description} ${b.owner} ${b.name}`)
  //     return ac == bc ? 0: ac > bc? -1: 1
  //   })
  //   setData(data_copy)
  // }
  return (
    <>
      <Header/>
      <main className={style.wrapper}>
        <Card className={style.bar}>
          {/* <Input placeholder="Запрос для поиска" onChange={(e)=>Search(e.target.value)} value={searchQuery}></Input> */}
        </Card>
        <div className={style.list}>
            {data && data !== undefined && data.length != 0 ? data.map((d, i) => (
                <Entry key={i} data={d}></Entry>
            )) : null}
          </div>
      </main>
    </>
  )
}
