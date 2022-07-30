import { useEffect } from "react";
import { useFetch } from "../../hook";
import { getAllCredits } from "../../services";

export const Example = () => {
  const { callEndPoint } = useFetch()

  const getCredits = async () => {
    let result = await callEndPoint(getAllCredits())
    console.log( result ) 
  }

  useEffect(() => {
    getCredits()
  },[])

  return (
    <>
      <div>Examples</div>
      {/* <button onClick={() => getCredits()}>Click me!!</button> */}
    </>
  )
}
