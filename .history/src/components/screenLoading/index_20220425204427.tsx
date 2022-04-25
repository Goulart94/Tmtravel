import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import style from "./style.module.scss";

export default function Loading() {
  return (
    <div>
        <div className={style['lds-dual-ring']}></div>
    </div>
  )
}
