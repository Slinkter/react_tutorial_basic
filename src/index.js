import React from "react";
import ReactDom from "react-dom";

//CSS
import "./style/index.css";
//

const arrayBooks = [
  {
    title: " Atomic Habits",
    author: " Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
  },

  {
    title: " How to Win Friends & Influence People",
    author: "Dale Carnegie",
    img: "https://images-na.ssl-images-amazon.com/images/I/41C9YOYkkOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img
        style={{
          width: "80%",
          objectFit: "cover",
        }}
        src={img}
        alt=""
      />
      <h1> {title} </h1>
      <h4> {author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
