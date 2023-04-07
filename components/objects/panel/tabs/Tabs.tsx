"use client";
import React, { useState } from 'react'
import style from "./tabs.module.css";
import classNames from 'classnames';
import Task from '../task/Task';

type Props = {
    children?: React.ReactNode
}

const tabs = [
    {title: "Задачи", value: 0},
    {title: "Группы", value: 1},
    {title: "Отчёт",  value: 2},
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
                            {e.title}
                    </button>
                )}
                <div className={style.line} style={{
                    left: `${100 / tabs.length * selectedTab}%`,
                    right: `${100 - (100 / tabs.length) * (selectedTab + 1)}%` 
                }}/>
            </header>
            <main className={classNames(style.tabBody, {[style.selected]: selectedTab==0})}>
                <div className={style.taskList}>
                    <Task data={{
                        id: "1",
                        done: false,
                        name: "Hello",
                        peopleCount: 1,
                        attributesCount: 1,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus illum aliquid numquam laboriosam in quis quaerat aspernatur possimus, dicta, ea, cum voluptates eos suscipit odit magni maiores placeat dolores!",
                        date: new Date()
                    }}/>
                    <Task data={{
                        id: "1",
                        done: true,
                        name: "Hello Done",
                        peopleCount: 3,
                        attributesCount: 5,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus illum aliquid numquam laboriosam in quis quaerat aspernatur possimus, dicta, ea, cum voluptates eos suscipit odit magni maiores placeat dolores!",
                        date: new Date()
                    }}/>
                </div>
            </main>
            <main className={classNames(style.tabBody, {[style.selected]: selectedTab==1})}>
                Группы
            </main>
            <main className={classNames(style.tabBody, {[style.selected]: selectedTab==2})}>
                Отчёт
            </main>
        </div>
    )
}