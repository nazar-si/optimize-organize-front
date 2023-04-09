// Этот пустой элемент загружает данные в хранилище Redux. 
// Архитектура Next13  не позволяет это сделать из родителя 

"use client"
import React, { useEffect } from 'react'
import { GeneralAttribute } from '../types'
import { useAppDispatch } from '@/state/hooks'
import { attributesActions } from '@/state/slices/attributeSlice'

type Props = {
    data: Array<GeneralAttribute>
}

export default function DataUpload({data}: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(attributesActions.load(data));
  }, [])
  
  return (
    <></>
  )
}