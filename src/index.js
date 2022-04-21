import React from "react";
import ReactDom from "react-dom";

//CSS
import "./style/index.css";
//

const arrayBooks = [
  {
    id: 1,
    title: " Atomic Habits",
    author: " Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
  },

  {
    id: 2,
    title: " How to Win Friends & Influence People",
    author: "Dale Carnegie",
    img: "https://images-na.ssl-images-amazon.com/images/I/41C9YOYkkOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    title: " How to Win Friends & Influence People",
    author: "Dale Carnegie",
    img: "https://images-na.ssl-images-amazon.com/images/I/41C9YOYkkOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {arrayBooks.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {

  /*  */
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    alert('hello from button')
  }

  const complexExample = (author)=>{
    console.log(author);
  }

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
      <h1 onClick={()=>{console.log(title)}}> {title} </h1>
      <h4> {author} </h4>
      <button type="button" onClick={clickHandler} > EXAMPLE</button>
      <button type="button" onClick={()=> complexExample(author)} > MORE EXAMPLE</button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
