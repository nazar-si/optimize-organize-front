import React from 'react'

type Props = {
    children?: React.ReactNode,
    className?: string,
    onClick?: ()=>any
}

export default function Button(props: Props) {
  return (
    <button 
        className={"bg-white border-[1px] border-gray-300 rounded-md flex items-center justify-center p-1 px-4 text-gray-600 gap-2 font-regular hover:bg-gray-100 transition-all "+ props.className}
        onClick={props.onClick}
    >{props.children}</button>
  )
}