"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function notfound() {
  let rout = useRouter();
  useEffect(() => {
    setTimeout(() => {
      rout.push("/");
    }, 1500);
  }, []);

  let myfun = () => {
    rout.push("/");
  };
  return (
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <img
        src="https://media.tenor.com/vYTwUEafhogAAAAC/404.gif"
        alt="img"
        width="60%"
      />
      <br />
      <button onClick={myfun}>go to homepage</button>
    </div>
  );
}
