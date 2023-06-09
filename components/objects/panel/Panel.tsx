import React from 'react'
import style from "./panel.module.css";
import { IData } from '@/app/objects/[id]/object.type';
import { Star, MapPin, Settings, Box } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import Tabs from './tabs/Tabs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Buttons from './buttons/Buttons';

type Props = {
  children?: React.ReactNode;
  data: Partial<IData>;
}

export default function Panel(props: Props) {
  const data = props.data;
  return (
    <main className={style.wrapper}>
      <section className={style.image}>
        <div className={style.cover}>
          <div className={style.title}>
            {data.name}
          </div>
          <div className={style.type}>
            {data.type}
          </div>
        </div>
        <img src={data.imageUrl} alt="Картинка"/>
      </section>
      <section className={style.info}>
        <div className={style.rate}>
          <div className={style.icon}>
            <Star size={16} />
          </div>
          {data.rating}% <span className={style.count}>{data.taskCount ? "(" + data.taskCount + ")" : null}</span>
        </div>
        <div className={style.location}>
          <div className={style.icon}>
            <MapPin size={16}></MapPin>
          </div>
          {data.location}
        </div>
      </section>
      <section className={style.attributes}>
        <Buttons></Buttons>
      </section>
      <section className={style.description + " prose"}>
        <p className='line-clamp-3'>{data.description}</p>
      </section>
      {props.children}
    </main>
  )
}