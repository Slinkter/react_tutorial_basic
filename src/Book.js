import React from "react";

const Book = ({ img, title, author }) => {
  /*  */
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello from button");
  };

  const complexExample = (author) => {
    console.log(author);
  };

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
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4> {author} </h4>
      <button type="button" onClick={clickHandler}>
        EXAMPLE
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        MORE EXAMPLE
      </button>
    </article>
  );
};

export default Book;
