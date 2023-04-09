import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Editor from "@/components/attributes/editor/Editor";
import Topbar from "@/components/attributes/topbar/Topbar";
import { GeneralAttribute } from "@/components/attributes/types";
import { IData } from "./object.type";

type dataType = {
  basicData: {
    name: string
  },
  attributes: Array<GeneralAttribute> 
}

async function getData(id:number): Promise<dataType> {
  // здесь мы тип от бэка получили массив атрибутов 
  const data: dataType = {
    basicData: {
      name: 'МГУ',
    },
    attributes: []
  }; 
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
    return <div className="flex flex-col h-[100vh]">
        <Topbar passName={data.basicData.name}></Topbar>
        <Editor upload={data.attributes /* Загружаем значения атрибутов в редактор */}></Editor> 
    </div>;
  }
