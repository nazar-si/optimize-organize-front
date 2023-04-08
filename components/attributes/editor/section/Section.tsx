"use client"
import React from 'react'
import style from "./section.module.css"
import Button from '@/components/ui/Button'
import { Plus, Photo, File3d, Movie } from 'tabler-icons-react'
import Card from '@/components/ui/Card'
import classNames from 'classnames'
import * as AType from "../../types"


export const typeToIcon = {
  1: <Photo size={16}/>,
  2: <File3d size={16}/>,
  3: <Movie size={16}/>
}
interface optionsTypes {
  1: AType.Image,
  2: AType.File,
  3: AType.Video
}

const options  = {
  1: 
}


type Props = {}

export default function Section({}: Props) {
  return (
    <section className={style.wrapper}>
        <Card className={classNames(style.card, {[style.noState]: true})}>
          <Button><Plus size={16}/>Добавить значение атрибута</Button>
          <Button></Button>
        </Card>
    </section>
  )
}