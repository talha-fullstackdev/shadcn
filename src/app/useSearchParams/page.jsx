import React from 'react'
import Products from './Products'
const UseSearchParams = async ({searchParams}) => {
    // const searchParams = await props.searchParams;

     const searchParam= await searchParams
        console.log("server component search params",searchParam)

  return (
    <div>
        <h1>getting the query parameter in server component using searchParams</h1>
        <p> name {searchParam?.name || "no name"}</p>
        <p> price {searchParam?.price || 0 }</p>
        <p> color {searchParam?.color || "no no color"}</p>
        <p> type {searchParam?.type || "no type" }</p>
      <Products/>
    </div>
  )
}

export default UseSearchParams