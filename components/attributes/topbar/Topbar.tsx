"use client";
import React, { useState } from 'react'
import style from "./topbar.module.css"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { ChevronLeft } from 'tabler-icons-react'
import { useRouter } from 'next/navigation';
import { Pencil } from 'tabler-icons-react';

type Props = {
  passName?: string
  changeable?: boolean,
  taskId?: number,
  objectId?: number

}

export default function Topbar({passName, changeable, taskId, objectId}: Props) {
  const router = useRouter();
  const [name, setName] = useState(passName);
  const updateName = (value: string)=>{
    setName(value);
    // Здесь код для запроса, чтобы обновить имя на бэке 
  }
  return (
    <div className={style.topbar}>
      <div className={style.row}>
        <Button className="rounded-r-none !p-0 w-11" onClick={()=>router.back()}>
          <ChevronLeft size={18}/>
        </Button>
        {!changeable && <Button className='rounded-l-none'>
          {passName}
        </Button> }
        {changeable && <Input noMargins value={name} className={' !my-0 rounded-l-none'} onChange={e=>updateName(e.target.value)}><Pencil size={16} /></Input>}
      </div>
      <Input
        placeholder='Запрос для поиска'
      />
    </div>
  )
}