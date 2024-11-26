import React from "react";
import style from "../styles/css/notecard.module.css";
import CardItem from "./carditem";

function CardAktif({ onDelete, onActive, notes }) {
  return (
      <div className={style.note_item__action}>
          {
              notes.map(note => (
                  <CardItem changeButton="Arsipkan" key={note.id} onDelete={onDelete} buttonAction={onActive} {...note} />
              ))
          }
      </div>
  )
}

export default CardAktif;
