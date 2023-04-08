import React from 'react'

type Props = {
    className?: string,
    children?: React.ReactNode
}

export default function Card({children, className}: Props) {
  return (
    <div className={`rounded-md border-gray-300 border-[1px] bg-gray-50 shadow-md p-4 ${className}`}>{children}</div>
  )
}