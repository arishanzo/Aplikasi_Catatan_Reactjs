import React from "react";
import style from "../styles/css/notecard.module.css";
import CardItem from "./carditem";

function CardArsip({ onDelete, onArchive, notes }) {
  return (
      <div className={style.note_item__action}>
          {
              notes.map(note => (
                  <CardItem changeButton="Pindahkan" key={note.id} onDelete={onDelete} buttonAction={onArchive} {...note} />
              ))
          }
      </div>
  )
}

export default CardArsip;
