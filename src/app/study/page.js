import React from "react";

export default function page() {
  return (
    //catch all sagments of route
    <div>
      <h1>study for buddy</h1>
    </div>
  );
}
// SEO mate saru sapret dinamic meta data
export function generateMetadata({ params }) {
  return {
    title: "study page",
  };
}
