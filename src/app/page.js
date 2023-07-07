"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let myclick = () => {
    router.push("/about");
  };

  return (
    <>
      <h1>home</h1>
      <Link href="/about">about</Link> <br />
      <button onClick={myclick}>about</button>
      <br />
    </>
  );
}
