"use client";
import Link from "next/link";
export default function page() {
  return (
    //dynamic routing
    <div>
      <h1>hello student</h1>

      <ul>
        <li>
          <Link href="/student/ravi">ravi</Link>
        </li>
        <li>
          <Link href="/student/raj">raj</Link>
        </li>
        <li>
          <Link href="/student/rohan">rohan</Link>
        </li>
        <li>
          <Link href="/student/rajvi">rajvi</Link>
        </li>
      </ul>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "student page",
  };
}
