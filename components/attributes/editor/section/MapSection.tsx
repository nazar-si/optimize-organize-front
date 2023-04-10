import { GeneralAttribute } from '../../types'
import Input from '@/components/ui/Input'
import { useAppDispatch } from '@/state/hooks'
import { attributesActions } from '@/state/slices/attributeSlice'
import { AttributeSaverRef } from './Section'
import { url } from '@/app/api/config'

type Props = {
    data: GeneralAttribute
}

import React, { forwardRef, useImperativeHandle, useState } from 'react'
const MapSection = forwardRef<AttributeSaverRef, Props>(({data}, ref) =>{
    const dispatch = useAppDispatch();
    const [pseudoName, setPseudoName] = useState(data.name);
    useImperativeHandle(ref, ()=>({
        Save: ()=>{dispatch(attributesActions.update({
            id: data.ID,
            params: {
                name: pseudoName
            }
    }))}}));
    return (
        <div className='flex'>
            <img className='object-cover rounded-md h-48 m-2' src={data.data} alt="" />
            <div className='m-2 flex flex-col justify-center'>
                {!data.edit && <div className='font-medium text-lg'>{pseudoName}</div>}
                {data.edit && <Input className='font-medium text-lg w-[100%]' value={pseudoName} onChange={e=>setPseudoName(e.target.value)}></Input>}
                <div>Создано: {new Date(data.CreatedAt).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                {data.UpdatedAt && <div>Обновлено: {new Date(data.UpdatedAt).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}</div>}
            </div>
        </div>
    )
})

export default MapSection;