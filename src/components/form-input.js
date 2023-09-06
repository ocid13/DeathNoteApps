import React from "react";
import PropsType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/data';
import SaveAction from './action/SaveAction';

import { useState } from "react";
import Input from "./input";
import index from "../styles/form-input.module.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
    this.onSaveChangeHandler = this.onSaveChangeHandler.bind(this)
  }

  onTitleChangeHandler(t) {
    this.setState(() => {
      return {
        title: t.target.innerHTML,
      }
    })
  }

  onBodyChangeHandler(t) {
    this.setState(() => {
      return {
        body: t.target.innerHTML,
      }
    })
  }

  onSaveChangeHandler() {
    const {title, body} = this.state
    addNote({title, body})
    this.props.navigation('/')
  }

  render() {
    return(
      <section className="new-page">
        <div className="new-page__input">
          <input className="new-page__input__title" type='text' placeholder='Judul Kematian ...'
          value={this.state.title} onChange={this.onTitleChangeHandler} />

          <div className="new-page__input__body" data-placeholder="Catatan Kematian ..." value={this.state.body}
          contentEditable onInput={this.onBodyChangeHandler}></div>

          <SaveAction onSaveChangeHandler= { this.onSaveChangeHandler} />
        </div>
      </section>
    )
  }
}

NoteInput.prototype = {
  title: PropsType.string,
  body: PropsType.string,
  onTitleChangeHandler: PropsType.func,
  onBodyChangeHandler: PropsType.func,
  onSaveChangeHandler: PropsType.func
}

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <form className={index.form} onSubmit={createNote}>
      <h2 className={index.heading}>Buat Catatan Baru</h2>
      <small className={index.small}>
        Sisa Karakter : <span className={index.counter}>{50 - title.length}</span>
      </small>
      <Input value={title} onChange={setTitle} type='text' placeholder='Judul' id='title' name='title' required />
      <Input value={note} onChange={setNote} type='textarea' placeholder='Tulis yang anda pikirkan' id='note' name='note' required />
      <Input type='submit' id='submit_form' name='submit_form' value='Buat' />
    </form>
  );
};

export default FormInput;
