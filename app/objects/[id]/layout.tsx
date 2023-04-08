import { IData } from "./object.type";
import Tabs from "../../../components/objects/panel/tabs/Tabs";

async function getData(id: number) {

    const data : Partial<IData> = {
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
    }
    return data;
}

import React from "react";
import Panel from "@/components/objects/panel/Panel";
import style from "./layout.module.css";


export default async function Layout({children, params}:{children : React.ReactNode, params:{id:string, dir?:string}}) {
    const data = await getData(parseInt(params.id));
    return (
      <div className={style.layout}>
        <Panel data={data}>
          <Tabs></Tabs>
        </Panel>
        <main className={style.main}>{children}</main>
      </div>
    )
  }