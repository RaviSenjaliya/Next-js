"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  let pathname = usePathname();
  return (
    <div>
      <h1>aboutt page</h1>

      {pathname !== "/about/myabout2" ? (
        <>
          <Link href="/about">aboutt</Link>
          <br />
          <Link href="/about/myabout1">myabout1</Link>
          <br />
          <Link href="/about/myabout2">myabout2</Link>
        </>
      ) : (
        <Link href="/about">go to aboutt</Link>
      )}
      {children}
    </div>
  );
}
