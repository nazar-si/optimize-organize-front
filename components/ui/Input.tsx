import classNames from 'classnames';
import React, { ReactText } from 'react'

type Props = {
    label?: string,
    placeholder?:string,
    type?: "text" | "password",
    className?:string,
    containerClassName?: string,
    children?:React.ReactNode,
    autocomplete?:string,
    onClick?:React.MouseEventHandler<HTMLInputElement>,
    onChange?:React.ChangeEventHandler<HTMLInputElement>,
    onKeyDown?:React.KeyboardEventHandler<HTMLInputElement>,
    onBlur?:React.FocusEventHandler<HTMLInputElement>,
    value?:string,
    name?:string,
    noMargins?: boolean,
    error?: boolean
}
export type Ref = HTMLInputElement;
const Input = React.forwardRef<Ref,Props>(({placeholder, label, type, className, containerClassName, children, autocomplete, value, onClick, onChange, onKeyDown, onBlur, name, noMargins, error}: Props, ref) => {
    const code = Math.floor(Math.random() * 1e8).toString();
    return (
        <div className={classNames(containerClassName,{["my-1"]: !noMargins})}>
            <label htmlFor={"input-" + code} className='text-sm mb-1 font-medium'>{label}</label>
            <label
                htmlFor={"input-" + code}
                className={classNames('bg-white rounded-md border-gray-300 border-[1px] focus-within:border-blue-500 outline-none text-gray-700 focus-within:text-blue-500 placeholder:text-gray-400 w-[100%] h-[100%] transition-all flex items-center', {["border-rose-500 bg-rose-50"]: error},  className)}
            >
                <div className={'flex items-center justify-center px-2 opacity-70'}>
                    {children}
                </div>
                <input
                    ref={ref}
                    autoComplete={type + " " + autocomplete}
                    type={type?type:"text"}
                    id={'input-' + code} 
                    placeholder={placeholder}
                    onClick={onClick}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    name={name}
                    value={value}
                    className='outline-none rounded-md m-0 pr-2 py-1 w-[100%] bg-transparent'
            /></label>
        </div>
    )
})

export default Input; 