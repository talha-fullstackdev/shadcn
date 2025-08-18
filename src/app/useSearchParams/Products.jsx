"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
const Products = () => {
  const searchParams = useSearchParams();
  const models = searchParams.getAll("models"); // getting query parameters in client components
  const name = searchParams.get("name"); // get one value (note: we need to give the exact key value here that passed in query parameter )
  const price = searchParams.get("price");
  const color = searchParams.getAll("color"); // here in url color have only one value but we can also get it like this getAll in case we dont know it have one value or more then one
  const type = searchParams.get("type");
  const entries = Object.fromEntries(searchParams.entries()); // geting all values as an object

  console.log("client compponet", searchParams);
  console.log(entries);
  return (
    <>
      <h1>
        getting the query parameter in client component using useSearchParams
      </h1>
      <p>Name : {name}</p>
      <p>Models : {models}</p>
      <p>Price : {price}</p>
      <p>color : {color}</p>
      <p>Type : {type}</p>
    </>
  );
};

export default Products;
