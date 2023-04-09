import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Editor from "@/components/attributes/editor/Editor";
import Topbar from "@/components/attributes/topbar/Topbar";
import { GeneralAttribute } from "@/components/attributes/types";

async function getData(id:number): Promise<Array<GeneralAttribute>> {
  // здесь мы тип от бэка получили массив атрибутов 
  const data : Array<GeneralAttribute> = []; 
  return data; 
}

export default async function Page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {

    const data = await getData(parseInt(params.id));
    return <div>
        <Topbar passName="Дом на берегу моря"></Topbar>
        <Editor upload={data /* Загружаем значения атрибутов в редактор */}></Editor> 
    </div>;
  }
