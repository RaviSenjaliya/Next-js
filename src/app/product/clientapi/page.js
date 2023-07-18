"use client";
import { useState, useEffect } from "react";

export default function page() {
  const [state, setstate] = useState();
  let myapi = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setstate(data.products);
  };

  useEffect(() => {
    myapi();
  }, []);

  return (
    <>
      <h1>this is client page</h1>

      {state?.map((val) => {
        return <p>{val.title}</p>;
      })}
    </>
  );
}
//client side dendering
