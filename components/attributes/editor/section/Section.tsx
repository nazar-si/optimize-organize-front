import React from 'react'
import { GeneralAttribute } from '../../types'
import Card from '@/components/ui/Card'
import style from "./section.module.css"
import Button from '@/components/ui/Button'
import { Pencil, Trash } from 'tabler-icons-react'

type Props = {
    data: GeneralAttribute,
}

export default function Section({data}: Props) {
    const text = JSON.stringify(data, null, ' ').replace(/: {/g, `${' '.repeat(5)}: \{`).replace(/: \{\n\s+/g, ': {').replace(/",\n\s+/g, ', ').replace(/"\n\s+\}/g, '}'); //Done all at once
    return (
        <Card className={style.wrapper}>
            <div className={style.options}>
                <button className={style.button}><Pencil size={18}/></button>
                <button className={style.button}><Trash size={18}/></button>
            </div>
            {text.split("\n").map(e=><p>{e}</p>)}
        </Card>
    )
}