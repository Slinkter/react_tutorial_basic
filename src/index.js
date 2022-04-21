import React from "react";
import ReactDom from "react-dom";

//CSS
import "./style/index.css";
//
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
