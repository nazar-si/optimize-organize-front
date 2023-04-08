import React from 'react'
import style from "./entry.module.css"
import type { IData } from '@/app/objects/[id]/object.type'
import Card from '@/components/ui/Card'
import { MapPin, Star, User, Checkbox } from 'tabler-icons-react'
import { getNoun } from '@/utils/help'

type Props = {
    data: Partial<IData>
}

export default function Entry({data}: Props) {
  return (
    <div className={style.card}>
        <img src={data.imageUrl} alt="Изображение" />
        <div className={style.info}>
            <div className={style.title}>
                {data.name} - <span className={style.type}>{data.type}</span>
            </div>
            <div className={style.description}>
                {data.description}
            </div>
            <div className={style.baseInfo}>
                <div className={style.rating}>
                    <Star size={18}/>{data.rating}% 
                </div>
                <div className={style.location}>
                    <MapPin size={18}/>
                    <div className={style.col}>
                        <div>{data.location}</div>
                        <div>{data.region}</div>
                    </div>
                </div>
            </div>
            <div className={style.statuses}>
                {data.taskCount && <div className={style.tasks}>
                    <Checkbox size={18}/>{getNoun(data.taskCount, "задача", "задачи", "задач")}
                </div>}
                {data.owner && <div className={style.owner}>
                    <User size={18}/>{data.owner}
                </div>}
            </div>
        </div>
    </div>
  )
}