import React from 'react'
import AddSection from '../addSection/addSection'
import style from "./sectionsList.module.css"
import { useAppSelector } from '@/state/hooks'
import { stateType } from '@/state/slices/attributeSlice'
import { GeneralAttribute, ID } from '../../types'
import { AppState } from '@/state/stores/store'
import Card from '@/components/ui/Card'
import Section from '../section/Section'

type Props = {}

export default function SectionsList({}: Props) {
    const list : Map<ID, GeneralAttribute> = useAppSelector((store)=>store.attributesReducer.attributes);
  return (
    <div className={style.wrapper}>
        {Array.from(list.values()).map((e, i)=><Section key={i} data={e}/>)}
        <AddSection></AddSection>
    </div>
  )
}