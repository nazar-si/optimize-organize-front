"use client"
import React, { useRef, useState } from 'react'
import style from "./addSection.module.css"
import Button from '@/components/ui/Button'
import { Plus, ChevronRight, Photo, File3d, Movie, MapPin } from 'tabler-icons-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import classNames from 'classnames'
import proto, * as AType from "../../types"
import { attributesActions } from '@/state/slices/attributeSlice'
import { genAttribute } from '../../types'
import { useAppDispatch } from '@/state/hooks'


export const typeToIcon : {[key: string]: any}= {
  1: <Photo size={16}/>,
  2: <File3d size={16}/>,
  3: <Movie size={16}/>,
  4: <MapPin size={16}/>
}

const options: {[key: string]: {name: string, call: keyof AType.prototypesTypes}} = {
  1: {
    name: "Фотография",
    call: "image"
  },
  2: {
    name: "Файл",
    call: "file",
  },
  3: {
    name: "Видео",
    call: "video"
  },
  4: {
    name: "Карта",
    call: "map"
  }
}

type Props = {}

export default function Section({}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [addStage, setAddStage] = useState(0);
  const [name, setName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [nullNameError, setNullNameError] = useState(false);
  const dispatch = useAppDispatch();

  const onAdd = ()=>{
    setAddStage(1);
  }
  const toLastStep = (i: string) => {
    setAddStage(2);
    setSelectedType(i);
    if (addStage == 1)
      inputRef.current!.focus();
  }
  const Finish = ()=>{
    if (!name.length)
      return setNullNameError(true);
    setAddStage(0);
    setSelectedType("");
    setName("");
    let s = options[selectedType.toString()].call;
    let prototype = genAttribute(name, proto[s]);
    prototype.edit = true;
    dispatch(
      attributesActions.add({prototype})
    )
  }
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
              error={nullNameError}
              value={name}
              onChange={(e)=>{setName(e.target.value);setNullNameError(false)}}
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