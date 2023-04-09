import React from 'react'
import Task from './Task'

type Props = {

}

export default function TaskList({}: Props) {
  return (
    <div>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </div>
  )
}