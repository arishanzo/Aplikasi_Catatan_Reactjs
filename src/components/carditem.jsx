import React from "react";
import style from "../styles/css/notecard.module.css";
import { showFormattedDate } from '../utils/index'

function CardItem({ changeButton, id, title, body, createdAt, onDelete, buttonAction }) {
    return (

     <article className={style.note_item}>
        <div className={style.note_item__content}>
            <h3 className={style.note_item__title}>{title}</h3>

            <p className={style.note_item__date}>{showFormattedDate(createdAt)}</p>

            <p className={style.note_item__body}>{body}</p>

        </div>

        <div className={style.note_item__action}>
            <button className={style.note_item__delete_button} onClick={() => onDelete(id)}>
            Hapus
            </button>

            <button className={style.note_item__archive_button} onClick={() => buttonAction(id)}>
               {changeButton}
            </button>
        </div>

        </article>
      
    )
}

export default CardItem;