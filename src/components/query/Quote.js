import { useQuery } from "react-query"
import getQuote from "./getQuote";

export default function Quote({quote}) {

  const {data} = useQuery("quote", ()=> getQuote())

  return (

    <div>
      <h2>Api calling with rect-query</h2>
      <p>{data?.quote}</p>
      </div>
  )
}

