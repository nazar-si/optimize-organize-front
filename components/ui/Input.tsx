import classNames from 'classnames';
import React, { ReactText } from 'react'

type Props = {
    label?: string,
    placeholder?:string,
    type?: "text" | "password",
    className?:string 
    children?:React.ReactNode,
    autocomplete?:string,
    onClick?:React.MouseEventHandler<HTMLInputElement>,
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    value?:string 
}

export default function Input({placeholder, label, type, className, children, autocomplete, value, onClick, onChange}: Props) {
    const code = Math.floor(Math.random() * 1e8).toString();
    return (
        <div className={classNames(className, "my-1")}>
            <label htmlFor={"input-" + code} className='text-sm mb-1 font-medium'>{label}</label>
            <label
                htmlFor={"input-" + code}
                className='bg-white rounded-md border-gray-300 border-[1px] focus-within:border-blue-500 outline-none text-gray-700 focus-within:text-blue-500 placeholder:text-gray-400 w-[100%] h-[100%] transition-all flex items-center'
            >
                <div className={'flex items-center justify-center px-2 opacity-70'}>
                    {children}
                </div>
                <input
                    autoComplete={type + " " + autocomplete}
                    type={type?type:"text"}
                    id={'input-' + code} 
                    placeholder={placeholder}
                    onClick={onClick}
                    onChange={onChange}
                    className='outline-none rounded-md m-0 pr-2 py-1 w-[100%]'
            /></label>
        </div>
    )
}