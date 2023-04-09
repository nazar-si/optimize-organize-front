"use client";

import React, { useRef, useState } from 'react'
import style from "./task.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Input from '@/components/ui/Input';
import { Pencil } from 'tabler-icons-react';
import { DateTimePicker } from '@mantine/dates';

const data = {
  name: ""
}

type Props = {
  className?:string
}

export default function Task({className}: Props) {
  const pathname = usePathname();
  const [changeName, setChangeName] = useState(false);
  const [name, setName] = useState("Task Name");
  const inputRef = useRef<HTMLInputElement>(null);
  const lostFocus :React.FocusEventHandler = (e)=>{
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setChangeName(false);
    }
  }
  const Prevent = (e:any) =>{
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <Link href={`${pathname}/${1}`} className={style.task + " " + className} onBlur={lostFocus}>
      <div className={style.title}>
        <button onClick={e=>{
          Prevent(e);
          setChangeName(!changeName);
          if (!changeName)
            inputRef.current?.focus();
        }}
          className='w-8 h-8 flex items-center justify-center bg-white border-[1px] border-gray-200 rounded-md'
        ><Pencil size={16}/></button>
        {!changeName && <div className='px-3'>{name}</div>}
        <Input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} containerClassName={'flex-1 my-0 ' + (changeName?"":"hidden")} onClick={Prevent} onKeyDown={(e)=>{
          if (e.key == "Enter")
            setChangeName(false);
        }} onBlur={lostFocus}/>
      </div>
      <div onClick={Prevent}>
        <DateTimePicker style={{border: "none"}} value={new Date()} />
      </div>
    </Link>
  )
}