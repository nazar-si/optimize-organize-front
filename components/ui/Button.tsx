import React from 'react'

type Props = {
    children?: React.ReactNode,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: ()=>any
}

export default function Button(props: Props) {
  return (
    <button 
        className={"bg-white border-[1px] border-gray-300 rounded-md flex items-center justify-center p-1 px-4 text-gray-600 gap-2 font-regular hover:bg-gray-100 transition-all focus:ring-2 ring-blue-500 outline-none "+ props.className}
        type={props.type}
        onClick={props.onClick}
    >{props.children}</button>
  )
}