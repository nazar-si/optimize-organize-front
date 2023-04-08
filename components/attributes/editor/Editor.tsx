import React from 'react'
import style from "./editor.module.css"
import { Plus } from 'tabler-icons-react'
import Button from '@/components/ui/Button'

type Props = {}

export default function Editor({}: Props) {
  return (
    <div className={style.wrapper}>
        <section className={style.add}>
            <Button className={style.button}>
                <Plus />
                Добавить аттрибут
            </Button>
        </section>
    </div>
  )
}