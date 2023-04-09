'use client'
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Editor from "@/components/attributes/editor/Editor";
import Topbar from "@/components/attributes/topbar/Topbar";
import { GeneralAttribute } from "@/components/attributes/types";
import { IData } from "./object.type";
import { useEffect, useState } from "react";

type dataType = {
  basicData: {
    name: string
  },
  attributes: Array<GeneralAttribute> 
}

const proto: dataType = {
  basicData: {
    name: '',
  },
  attributes: []
}; 

async function getData(id:string, token: string | null): Promise<dataType> {
  if(!token || !id)
    return proto;

  const res = await fetch('/api/getAttributesById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      token: token
    })
  });
  if(!res.ok)
    return proto;
  try{
    const data = await res.json();
    return data;
  }
  catch(e){
    return proto;
  }
}

export default function Page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const [data, setData] = useState<dataType>(proto);
    useEffect(() => {
      getData(params.id, window.localStorage.getItem('token')).then(data => setData(data));
    }, [params.id]);
    useEffect(() => {
      console.log(data)
    }, [data]);
    return <div className="flex flex-col h-[100vh]">
        <Topbar passName={data.basicData.name}></Topbar>
        <Editor upload={data.attributes /* Загружаем значения атрибутов в редактор */}></Editor> 
    </div>;
  }
