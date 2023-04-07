import React from 'react'
import style from "./task.module.css"
import { Avatar } from "@mantine/core"
import {Box, Calendar, RotateClockwise2, Clock, CircleCheck, CircleX} from "tabler-icons-react"
import { getNoun } from '@/utils/help'
import { ITask } from './task.type'
import { Tooltip } from '@mantine/core'
import classNames from "classnames"

type Props = {
    data: ITask
}
const statusIcon = {
    "before":   <div className='flex items-center gap-2 text-xs text-gray-500'>Выполняется         <RotateClockwise2 size={16} /></div>,
    "due":      <div className='flex items-center gap-2 text-xs text-amber-500'>Завершается сегодня <Clock size={16} /></div>,
    "done":     <div className='flex items-center gap-2 text-xs text-blue-500'>Выполнено           <CircleCheck size={16} /></div>,
    "overdue":  <div className='flex items-center gap-2 text-xs text-rose-500'>Просрочено          <CircleX size={16} /></div>
} 

export default function Task({data}: Props) {
    const localDate = new Date(new Date().toDateString());

    const overdue = data.date.getTime() > new Date().getTime();
    const due = data.date.getTime() == localDate.getTime();
  return (
    <div className={classNames(
        style.wrapper, {
            [style.done]: data.done,
            [style.overdue]: overdue
        })}>
        <div className={style.title}>
            <div className={style.row}>
                <div className={style.name}>
                    {data.name}
                </div>
                <div className={style.status}>
                    {(!data.done && !overdue && !due)
                        && statusIcon["before"]}
                    {(!overdue && !data.done && due)
                        && statusIcon["due"]}
                    {(data.done && !overdue)
                        && statusIcon["done"]}
                    {overdue
                            && statusIcon["overdue"]}
                </div>
            </div>
            <div className={style.description}>
                {data.description}
            </div>
        </div>
        <div className={style.info}>
            <div className={style.counts}>
                <div className={style.people}>
                    <Avatar.Group >
                        <Avatar size="sm" radius="lg" color="blue">DL</Avatar>
                        <Avatar size="sm" radius="lg" color="blue">NS</Avatar>
                        <Avatar size="sm" radius="lg" color="blue">2+</Avatar>
                    </Avatar.Group>
                </div>
                <div className={style.attributes}>
                    <Box size={16}></Box> <span>{getNoun(data.attributesCount, "атрибут", "атрибута", "атрибутов")} </span>
                </div>
            </div>
            <div className={style.date}>
                <Calendar size={16}></Calendar>
                {data.date.toLocaleDateString('ru-RU')}
            </div>
        </div>
    </div>
  )
}