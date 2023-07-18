"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logoimg from "../../public/vercel.svg";
import s from "./custom.module.css";

export default function Home() {
  const router = useRouter();
  let myclick = () => {
    router.push("/about");
  };

  return (
    <>
      <h1>Home</h1>
      <h2 className={s.ravi}>Custome CSS</h2>
      <Image src={logoimg} />
      {/* next js ni link responsive vadhare  */}
      <Link href="/about">about</Link> <br />
      <button onClick={myclick}>about</button>
      <br />
    </>
  );
}
