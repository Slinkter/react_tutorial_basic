import React from "react";
import ReactDom from "react-dom";

//CSS
import "./style/index.css";
//
const firstBook = {
  title: " Atomic Habits",
  author: " Amelia Hepworth",
  img: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img
        style={{
          width: "100%",
        }}
        src={props.img}
        alt=""
      />
      <h1> {props.title} </h1>
      <h4> {props.author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
