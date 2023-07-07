"use client";
export default function page({ params }) {
  return (
    <div>
      <h1>day: {params.study[0]}</h1>
      <h3>lecture: {params.study[1]}</h3>
    </div>
  );
}
