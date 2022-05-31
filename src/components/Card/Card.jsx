import React from 'react';
import s from './Card.module.css'


export default function Card(props) {
    
  return (
      
    <div className={s.card}>{props.children}</div>
  )
}
