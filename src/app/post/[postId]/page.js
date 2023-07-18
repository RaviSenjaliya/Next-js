import Image from "next/image";
import post from "@/components/post";

export default async function page(params) {
  let data = post();
  let awaitdata = await data;
  console.log(params.postId);
  return (
    <>
      {/* <h1>product : {params.post}</h1>
      <Image src={params.image} /> */}
    </>
  );
}
