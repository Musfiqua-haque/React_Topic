/* eslint-disable no-unused-vars */

import useSWR from "swr";

const fetcher = async(...args)=>{
  const res = await fetch(...args);
  const data = await res.json();
  return data;
}

export default function Quote() {

const {data,error} = useSWR('https://dummyjson.com/quotes/random',fetcher,{
  suspense:true,
})

if(error){
  return <h1>There was an error</h1>
}

  return (
    <div>
      <h2>Api calling with SWR</h2>
      <p>{data.quote}</p>
      </div>
  )
}

