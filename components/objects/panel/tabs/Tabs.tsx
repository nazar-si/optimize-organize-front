"use client";
import React, { useState } from 'react'
import style from "./tabs.module.css";
import classNames from 'classnames';
import Task from '../task/Task';
import { Checkbox, ClipboardData, DeviceComputerCamera, Users } from 'tabler-icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

type Props = {
    children?: React.ReactNode,
    id?: string 
}

const tabs = [
    {title: "Задачи",       value: 0, link: "tasks",    icon: <Checkbox size={16}/>},
    {title: "Группы",       value: 1, link: "groups",   icon: <Users size={16}/>},
    {title: "Отчёт",        value: 2, link: "report",   icon: <ClipboardData size={16}/>},
    {title: "Конференции",  value: 3, link: "meetings", icon: <DeviceComputerCamera size={16}/>},
]

export default function Tabs({children, id}:Props) {
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const pathname = usePathname().split("/");
    // let anotherPath = !["tasks", "groups", "meetings", "report"].includes(pathname[3]);
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                {tabs.map((e, i)=>
                    <Link href={`objects/${id}/${e.link}`} 
                        key={i}  
                        onClick={()=>{
                            setSelectedTab(i);
                        }}  
                        className={classNames(style.tab, {[style.selected]: pathname[3] == e.link})}>
                            {e.icon}{e.title}
                    </Link>
                )}

            </header> 
        </div>
    )
}