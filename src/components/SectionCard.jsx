import React from "react";
import CardAktif from "./cardaktif";
import CardArsip from "./cardarsip";
import style from "../styles/css/notecard.module.css";



function SectionCard({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
    return (

        <React.Fragment>

<section>
    <h2 className={style.heading}>Catatan Aktif</h2>
   <div className={style.notes_list}>

    {
            activeDatas.length !== 0
            ? (<CardAktif onDelete={onDelete} notes={activeDatas} onActive={onActive} />)
            : (<p className={style.notes_list__empty_message}>Tidak ada catatan</p>)
    }
   </div>
</section>

<section>
    <h2 className={style.heading}>Catatan Arsip</h2>
   <div className={style.notes_list}>

    {
         archiveDatas.length !== 0
        ?  (<CardArsip onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} />)
           : (<p className={style.notes_list__empty_message}>Tidak ada catatan</p>)
    }
   </div>
</section>

</React.Fragment>

    )
}

export default SectionCard;