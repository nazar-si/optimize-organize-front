"use client"
import React, { useRef, useState } from 'react'
import style from "./addSection.module.css"
import Button from '@/components/ui/Button'
import { Plus, ChevronRight, Photo, File3d, Movie, MapPin } from 'tabler-icons-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import classNames from 'classnames'
import * as AType from "../../types"


export const typeToIcon : {[key: string]: any}= {
  1: <Photo size={16}/>,
  2: <File3d size={16}/>,
  3: <Movie size={16}/>,
  4: <MapPin size={16}/>
}

const options: {[key: string]: any} = {
  1: {
    name: "Фотография"
  },
  2: {
    name: "Файл"
  },
  3: {
    name: "Видео"
  },
  4: {
    name: "Локация"
  }
}




type Props = {}

export default function Section({}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [addStage, setAddStage] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const onAdd = ()=>{
    setAddStage(1);
  }
  const toLastStep = (i: string) => {
    setAddStage(2);
    setSelectedType(i);
    if (addStage == 1)
      inputRef.current!.focus();
  }
  const Finish = ()=>{}
  return (
    <section className={style.wrapper}>
        <Card className={classNames(style.card, {[style.noState]: true})}>
          <div className={classNames(style.row,{[style.hide]: addStage})}>
            <Button
              onClick={onAdd}
              className="h-10"
            >
                <Plus size={16}/>Добавить значение атрибута
            </Button>
          </div>
          <div className={classNames(style.row,{[style.hide]: !addStage})}>
            <span className='font-medium'>Тип:</span>
            {selectedType?options[selectedType].name:""}
          </div>
          <div className={classNames(style.row,{[style.hide]: !addStage})}>
            {Object.entries(options).map((e, i)=>(
              <Button key={i} className={classNames(style.option, {[style.selected]: e[0] == selectedType})} onClick={()=>toLastStep(e[0])}>{typeToIcon[e[0]]}</Button>
            ))}
          </div>
          <div className={classNames(style.row, {[style.hide]:addStage!=2})}>
            <Input
              ref={inputRef}
              onKeyDown={(e)=>{
                if (e.key == "Enter")
                  Finish();
              }}
              className={"h-10 "}
              placeholder='Название атрибута'></Input>
            <Button
              className={"h-10 p-0 "}
              onClick={Finish}
            >
              <ChevronRight size={18}/>
          </Button>
          </div>
        </Card>
    </section>
  )
}