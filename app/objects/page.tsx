import Entry from "@/components/objects/register/Entry";
import style from "./page.module.css";
import { IData } from "./[id]/object.type";
import Header from "@/components/objects/header/Header";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";
import getBuildings from "./api/getBuildings";
import Buildings from './buildings'


async function getData() {

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


export default async function Home() {
  const data = await getData();
  return (
    <>
      <Header/>
      <main className={style.wrapper}>
        <Card className={style.bar}>
          <Input placeholder="Запрос для поиска"></Input>
        </Card>
        <div className={style.list}>
          {/* <Buildings buildings={[]} /> */}
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
