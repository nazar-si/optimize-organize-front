'use client'
import Button from '@/components/ui/Button'
import React from 'react'
import style from "./buttons.module.css"
import {Box, Settings} from "tabler-icons-react"
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'

type Props = {}

export default function Buttons({}: Props) {
    const path = usePathname().split("/")
  return (
    <>
        <Link href={path.slice(0,3).join("/")} className='flex-1'>
            <Button className={classNames(style.general, {[style.selected]: path.length==3})}>
              <div className={style.icon}><Box size={18}/>  </div>
              Общие атрибуты
            </Button>
        </Link>
        <Link href={path.slice(0,3).join("/") + "/settings"}>
            <Button className={classNames(style.settings, {[style.selected]: path[3] == "settings"})}><Settings size={16}/></Button>
        </Link>
    </>
  )
}