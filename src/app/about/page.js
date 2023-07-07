"use client";
import { useRouter } from "next/navigation";
export default function page() {
  const rout = useRouter();
  const myclcik = (val) => {
    return rout.push(val);
  };
  return (
    <div>
      <h1>about page</h1>
      <button onClick={() => myclcik("/")}>home</button>
    </div>
  );
}
