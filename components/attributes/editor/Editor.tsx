"use client"
import { Provider } from 'react-redux'
import { store } from '@/state/stores/store'
import React from 'react'
import style from "./editor.module.css"
import { Plus } from 'tabler-icons-react'
import Button from '@/components/ui/Button'
import Section from './section/Section'  

type Props = {}

export default function Editor({}: Props) {
  
  return (
    <Provider store={store}>
      <div className={style.wrapper}>
          <Section/>
      </div>
    </Provider>
  )
}