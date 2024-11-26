import React from "react";
import style from "../Styles/css/navbar.module.css";

function Navheading({ onSearch }) {
    return (

      
        <nav className={style.nav}>
   
      <h1>Catatan Ku</h1>
        <input className="search_box" onChange={(event) => onSearch(event)}   type='search'  id='search_note' name='search_note' placeholder='Find notes...' />
      
    </nav>
    );
}

export default Navheading;