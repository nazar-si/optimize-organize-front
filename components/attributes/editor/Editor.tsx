"use client"

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
    <> 
      <DataUpload data={upload}/>
      <SectionsList/>
    </>
  )
}