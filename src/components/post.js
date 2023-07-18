export default async function post() {
  let datas = await fetch("https://jsonplaceholder.typicode.com/users");
  return datas.json();
}
