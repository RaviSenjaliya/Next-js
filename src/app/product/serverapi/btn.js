"use client";
export default function Btn({ price }) {
  return (
    <>
      <button onClick={() => alert(price)}>price</button>
    </>
  );
}
