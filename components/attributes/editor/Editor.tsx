import React from 'react'
import style from "./editor.module.css"
import { Plus } from 'tabler-icons-react'
import Button from '@/components/ui/Button'
import Section from './section/Section'  

type Props = {}

export default function Editor({}: Props) {
  return (
    <div className={style.wrapper}>
        <Section></Section>
    </div>
  )
}