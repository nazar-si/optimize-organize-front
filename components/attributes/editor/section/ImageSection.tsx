import { GeneralAttribute } from '../../types'
import Input from '@/components/ui/Input'
import { useAppDispatch } from '@/state/hooks'
import { attributesActions } from '@/state/slices/attributeSlice'
import { AttributeSaverRef } from './Section'

type Props = {
    data: GeneralAttribute
}

import React, { forwardRef, useImperativeHandle, useState } from 'react'
const ImageSection = forwardRef<AttributeSaverRef, Props>(({data}, ref) =>{
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
            <img className='object-cover rounded-md h-48 m-2' src="https://images.unsplash.com/photo-1614793319738-bde496bbe85e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" alt="" />
            <div className='m-2 flex flex-col justify-center'>
                {!data.edit && <div className='font-medium text-lg'>{pseudoName}</div>}
                {data.edit && <Input className='font-medium text-lg w-[100%]' value={pseudoName} onChange={e=>setPseudoName(e.target.value)}></Input>}
                <div>Создано: {new Date(data.CreatedAt).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
                <div>Обновлено: {new Date(data.UpdatedAt).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
            </div>
        </div>
    )
})

export default ImageSection;