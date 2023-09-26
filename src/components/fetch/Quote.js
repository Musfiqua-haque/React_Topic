
import React, { useEffect, useState } from 'react'

export default function Quote() {
  const [quote,setQuote] = useState(null)

   useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      setQuote(data)
    }
    fetchData();
   },[])
   console.log(quote);
  return (

    <div>
      <h2>Api calling with Fetch</h2>
      <p>{quote?.quote}</p>
      </div>
  )
}

