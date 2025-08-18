import React from "react";
// import { useSearchParams } from 'next/navigation'
const page = async ({ params }) => {
  const { slugs } = await params;
  console.log(slugs);
  return (
    <div>
      <h1>catch all segments page</h1>
      {slugs.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default page;
