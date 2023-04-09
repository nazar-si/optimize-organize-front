'use client'
import { IData } from "./object.type";
import Tabs from "../../../components/objects/panel/tabs/Tabs";
import { url } from "@/app/api/config";
import { Building } from "../building.type";
import { useEffect, useState } from "react";

const proto : Partial<IData> = {
  imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
  name: "Дом на берегу моря",
  type: "Жилое помещение",
  id: 1,
  rating: "55",
  // taskCount: 2,
  location: "ул. Колмогорова, 1, Москва",
  region: "Центральный округ",
  owner: "Имя обладателя",
  description: "Результат строительства, представляющий собой объемное надземное строительное сооружение, включающую в себя помещения, предназначенные для проживания и (или) деятельности людей, размещения производства, хранения продукции или содержания животных, а также сети и системы инженерно-технического обеспечения."
}

async function getData(id: string, token: string | null) {
  if(!token || !id || id.length === 0) {
    return proto
  }
  const res = await fetch('/api/getBasicParamsById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      token: token
    })
  })
  if(!res.ok || res.status!== 200) {
    return proto;
  }
  try {
      const data: Partial<IData> = await res.json();
      if(data) {
        return data;
      }
  }
  catch (e) {
      return proto;
  }
  // const data : Partial<IData> = {
  //     imageUrl: "https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg",
  //     name: "Дом на берегу моря",
  //     type: "Жилое помещение",
  //     id: 1,
  //     rating: "55",
  //     // taskCount: 2,
  //     location: "ул. Колмогорова, 1, Москва",
  //     region: "Центральный округ",
  //     owner: "Имя обладателя",
  //     description: "Результат строительства, представляющий собой объемное надземное строительное сооружение, включающую в себя помещения, предназначенные для проживания и (или) деятельности людей, размещения производства, хранения продукции или содержания животных, а также сети и системы инженерно-технического обеспечения."
  // }
  return proto;
}

import React from "react";
import Panel from "@/components/objects/panel/Panel";
import style from "./layout.module.css";


export default function Layout({children, params}:{children : React.ReactNode, params:{id:string, dir?:string}}) {
  const [data, setData] = useState<Partial<IData>>(proto);
  useEffect(() => {
    async function fetchData() {
      if(params.id) {
        getData(params.id, window.localStorage.getItem('token')).then((data) => {
          if(data) {
            setData(data)
          }
        });
      }
    }
    fetchData();
  }, [params.id]);
    return (
      <div className={style.layout}>
        <Panel data={data}>
          <Tabs id={params.id}></Tabs>
        </Panel>
        <main className={style.main}>{children}</main>
      </div>
    )
  }