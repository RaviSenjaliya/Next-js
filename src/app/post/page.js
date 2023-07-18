import post from "@/components/post";
import Image from "next/image";
import Link from "next/link";
export default async function page() {
  let data = post();
  let awaitdata = await data;
  console.log(awaitdata);
  return (
    <div>
      <h1>Your post </h1>
      {awaitdata.map((val) => {
        return (
          <p>
            <Link href={`/post/${val.id}`}>{val.name}</Link>
          </p>
        );
      })}
    </div>
  );
}
