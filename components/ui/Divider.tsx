import { data } from 'autoprefixer'
import React from 'react'

type Props = {
    children?: React.ReactNode,
    align?: "center" | "left" | "right",
    className?: string
}

export default function Divider(props: Props) {
  return (
    <div className={'flex items-center gap-2 ' + props.className}>
        {props.align!="left" && <div className="flex-1 h-[1px] bg-gray-300"></div>}
        {props.children && <div className='text-gray-500'>
            {props.children}
        </div>}
        {(props.align!="right" && props.children) && <div className="flex-1 h-[1px] bg-gray-300"></div>}
    </div>
  )
}