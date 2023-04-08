"use client";
import React from 'react'
import style from "./topbar.module.css"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { ChevronLeft } from 'tabler-icons-react'
import { useRouter } from 'next/navigation';

type Props = {}

export default function Topbar({}: Props) {
  const router = useRouter();
  
  return (
    <div className={style.topbar}>
      <div className={style.row}>
        <Button className="rounded-r-none !p-0 w-11" onClick={()=>router.back()}>
          <ChevronLeft size={18}/>
        </Button>
        <Button className='rounded-l-none'>
          Дом на берегу моря
        </Button>
      </div>
      <Input
        placeholder='Запрос для поиска'
      />
    </div>
  )
}