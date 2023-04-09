import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Editor from "@/components/attributes/editor/Editor";
import Topbar from "@/components/attributes/topbar/Topbar";
import { GeneralAttribute } from "@/components/attributes/types";

async function getData(id: number, dir: number): Promise<{data: Array<GeneralAttribute>, name: string}> {
  // id - id объекта 
  // dir - id таска 
  // здесь мы тип от бэка получили массив атрибутов 
  const data : Array<GeneralAttribute> = []; 
  // здесь код на получение имени задачи 
  const name = `Task at id: ${dir}`;
  return {data, name}; 
}


export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string, dir: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
    console.log(params.id, params.dir)
    const {data, name} = await getData(parseInt(params.id), parseInt(params.dir));
    return <div className="flex flex-col h-[100vh]">
        <Topbar passName={name} changeable objectId={parseInt(params.id)} taskId={parseInt(params.dir)}/>
        <Editor upload={data /* Загружаем значения атрибутов в редактор */}></Editor> 
    </div>;
  }
