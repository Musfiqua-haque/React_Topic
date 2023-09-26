
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Quote() {
  const [quote,setQuote] = useState(null)

   useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(res.data)
    }
    fetchData();
   },[])
   console.log(quote);
  return (

    <div>
      <h2>Api calling with Fetch</h2>
      <p>{quote.quote}</p>
      </div>
  )
}

