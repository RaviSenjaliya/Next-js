import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <>
        <Link href="/product/clientapi">clientapi</Link>
        <br />
        <Link href="/product/serverapi">serverapi</Link>
      </>

      {children}
    </div>
  );
}
