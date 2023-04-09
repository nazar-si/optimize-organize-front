"use client";
import React, { useState } from 'react'
import style from "./tabs.module.css";
import classNames from 'classnames';
import Task from '../task/Task';
import { Checkbox, ClipboardData, DeviceComputerCamera, Users } from 'tabler-icons-react';

type Props = {
    children?: React.ReactNode,
}

const tabs = [
    {title: "Задачи", value: 0, icon: <Checkbox size={16}/>},
    {title: "Группы", value: 1, icon: <Users size={16}/>},
    {title: "Отчёт",  value: 2, icon: <ClipboardData size={16}/>},
    {title: "Конференции",  value: 2, icon: <DeviceComputerCamera size={16}/>},
]

export default function Tabs({children}:Props) {
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                {tabs.map((e, i)=>
                    <button 
                        key={i}  
                        onClick={()=>{
                            setSelectedTab(i);
                        }}  
                        className={classNames(style.tab, {[style.selected]: i==selectedTab})}>
                            {e.icon}{e.title}
                    </button>
                )}

            </header> 
        </div>
    )
}