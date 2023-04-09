import React from 'react'
import { GeneralAttribute } from '../../types'
import Card from '@/components/ui/Card'
import style from "./section.module.css"

type Props = {
    data: GeneralAttribute,
}

export default function Section({data}: Props) {
    const text = JSON.stringify(data, null, ' ').replace(/: {/g, `${' '.repeat(5)}: \{`).replace(/: \{\n\s+/g, ': {').replace(/",\n\s+/g, ', ').replace(/"\n\s+\}/g, '}'); //Done all at once
    console.log(text);
    return (
        <Card className={style.wrapper}>
            {text.split("\n").map(e=><p>{e}</p>)}
        </Card>
    )
}