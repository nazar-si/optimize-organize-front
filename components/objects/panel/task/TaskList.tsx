import React from 'react'
import Task from './Task'
import style from "./taskList.module.css"
import { CircleCheck, CircleX, Calendar, RotateClockwise2 } from 'tabler-icons-react'
import { ITask } from './task_old.type'

type Props = {

}
const data : ITask = {
  name: "Task Name",
  time : new Date().toLocaleDateString("ru-RU"),
  done: false,
  attributesCount: 5
}
export default function TaskList({}: Props) {
  return (
    <>
      <div className={style.block}>
        <div className={style.grid}>
          <div className={style.status + " bg-teal-500/10 text-teal-500 border-teal-500"}>
            <CircleCheck size={18}/> Выполнено
          </div>
          <div>Дата</div>
          <div>Атрибуты</div>
        </div>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
      </div>
      <div className={style.block}>
        <div className={style.grid}>
          <div className={style.status + " bg-rose-500/10 text-rose-500 border-rose-500"}>
            <CircleX size={18}/> Просрочено
          </div>
          <div>Дата</div>
          <div>Атрибуты</div>
        </div>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
      </div>
      <div className={style.block}>
        <div className={style.grid}>
          <div className={style.status + " bg-amber-500/10 text-amber-500 border-amber-500"}>
            <Calendar size={18}/> Завершается сегодня
          </div>
          <div>Дата</div>
          <div>Атрибуты</div>
        </div>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
      </div>
      <div className={style.block}>
        <div className={style.grid}>
          <div className={style.status + " bg-blue-500/10 text-blue-500 border-blue-500"}>
            <RotateClockwise2 size={18}/> Выполняется
          </div>
          <div>Дата</div>
          <div>Атрибуты</div>
        </div>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
      </div>
      <div className={style.block}>
        <div className={style.grid}>
          <div className={style.status + " bg-gray-500/10 text-gray-500 border-gray-500"}>
            <RotateClockwise2 size={18}/> Выполняется
          </div>
          <div>Дата</div>
          <div>Атрибуты</div>
        </div>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
        <Task data={data} className={style.task}></Task>
      </div>
    </>
  )
}