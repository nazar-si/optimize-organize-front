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



async function getData(token: string) {
  const res = await fetch('/api/getBuildings', {
    method: 'POST',
    headers: {
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // 'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      // 'Accept': '*/*',
      // 'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify({
      token: token
    })
  })
  if(!res.ok) {
    return [];
  }
  // console.log('!', await res.text())
  try {
    const data: Array<Partial<IData>> = await res.json();
    console.log(data)
    return data;
  }
  catch(e) {
    console.log(e);
    return [];
  }
  return [];
  const data : Array<Partial<IData>> = [
    {
        imageUrl: "https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg",
        name: "Дом на берегу моря",
        type: "Жилое помещение",
        id: 1,
        rating: 55,
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
        rating: 100,
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
        setData(await getData(token))
      }
    }
    fetchData()
  }, [])
  
  return (
    <>
      <Header/>
      <main className={style.wrapper}>
        <Card className={style.bar}>
          <Input placeholder="Запрос для поиска"></Input>
        </Card>
        <div className={style.list}>
          {/* <Buildings /> */}
          <h1>Buildings</h1>
            <div className={style.list}>
            {data.map((d, i) => (
                <Entry key={i} data={d}></Entry>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
