"use client"
import React, { useRef } from 'react'
import { GeneralAttribute } from '../../types'
import Card from '@/components/ui/Card'
import style from "./section.module.css"
import Button from '@/components/ui/Button'
import { Pencil, Trash, RotateClockwise2, DeviceFloppy } from 'tabler-icons-react'
import { useAppDispatch, useAppSelector } from '@/state/hooks';
import { attributesActions } from '@/state/slices/attributeSlice'
import classNames from 'classnames'
import Input from '@/components/ui/Input'
import ImageSection from './ImageSection'
import MapSection from './MapSection'


type Props = {
    data: GeneralAttribute,
}
export type AttributeSaverRef = {Save: ()=>void}

export default function Section({data}: Props) {
    const text = JSON.stringify(data, null, ' ').replace(/: {/g, `${' '.repeat(5)}: \{`).replace(/: \{\n\s+/g, ': {').replace(/",\n\s+/g, ', ').replace(/"\n\s+\}/g, '}'); //Done all at once
    const dispatch = useAppDispatch();
    const edit = data.edit;
    const ref = useRef<AttributeSaverRef>(null);
    const Delete = ()=>{
        dispatch(attributesActions.remove(data.ID))
    } 
    const setEdit = ()=>{
        if (edit){
            ref.current?.Save();
        }
        dispatch(attributesActions.setEdit({id: data.ID, value:!edit}))
    }
    return (
        <Card className={classNames(style.wrapper, {["!border-blue-500"]: edit})}>
            <div className={style.options}>
                <button className={classNames(style.button, {[style.force]: edit})} onClick={setEdit}>
                    {!edit && <Pencil size={18}/>} {edit && <DeviceFloppy size={18}/>}
                </button>
                {(data.type && data.type > 0) 
                    && <button className={style.button} onClick={Delete}>
                    <Trash size={18}/>
                </button>}
                <button className={style.button}>
                    <RotateClockwise2 size={18}/>
                </button>
            </div>
            {data.type==1 && <ImageSection data={data} ref={ref}/>}
            {data.type==4 && <MapSection data={data} ref={ref}/> }
        </Card>
    )
}