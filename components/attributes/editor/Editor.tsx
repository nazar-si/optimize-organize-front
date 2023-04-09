"use client"
import { Provider } from 'react-redux'
import { store } from '@/state/stores/store'
import React from 'react'
import style from "./editor.module.css"
import { Plus } from 'tabler-icons-react'
import Button from '@/components/ui/Button'
import { GeneralAttribute } from '../types'
import DataUpload from './DataUpload'
import SectionsList from './sectionsList/SectionsList'

type Props = {
  upload: Array<GeneralAttribute>
}

export default function Editor({upload}: Props) {
  
  return (
    <Provider store={store}> 
      <DataUpload data={upload}/>
      <SectionsList/>
    </Provider>
  )
}