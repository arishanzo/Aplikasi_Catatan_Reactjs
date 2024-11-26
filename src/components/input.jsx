import React from "react";
import style from "../Styles/css/notesinput.module.css";


class Inputform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit),
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addDatas(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }


render(){
    return (
        <>
              <form onSubmit={this.onSubmitEventHandler}>
              <div className={style.note_input} >
      <h3> Buat Catatan Baru </h3>
  
         
      <p className={style.note_input__title__char_limit}> {this.state.limit - this.state.title.length} </p>
      <input type="text" className={style.note_input__title} value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Tuliskan Judul Disini" required/>
      <textarea className={style.note_input__body} value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Tuliskan catatan..."></textarea>
   
            <button type="submit"> Buat Catatan</button>
       
      
       </div>
       </form>
          </>
    );
}
}

export default Inputform;