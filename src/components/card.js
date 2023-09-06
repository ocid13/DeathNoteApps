import index from "../styles/card.module.css";
import { showFormattedDate } from "../utils/data";
import Button from "./button";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const moved = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className={index.card}>
      <header className={index.card_header}>
        <h3 className={index.heading}>{title}</h3>
        <small className={index.date}>{showFormattedDate(createdAt)}</small>
        <p className={index.note}>{body}</p>
      </header>
      <footer className={index.card_footer}>
        <Button eventHandler={() => deleteNote(id)} label='delete' />
        <Button eventHandler={() => moved(id)} label={archived ? "unarchived" : "archive"} />
      </footer>
    </article>
  );
};

export default Card;
