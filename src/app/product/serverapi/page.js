import Btn from "./btn";

async function data() {
  let mydata = await fetch("https://dummyjson.com/products");
  mydata = await mydata.json();
  return mydata.products;
}

export default async function page() {
  let Datas = await data();
  return (
    <div>
      <h1>this is serverAPI page</h1>
      {Datas.map((val) => {
        return (
          <>
            <h1>{val.title}</h1>
            <Btn price={val.price} />
          </>
        );
      })}
    </div>
  );
}
