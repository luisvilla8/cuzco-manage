import { useEffect } from 'react';
import { useFetch } from '../../hook'
import { getAllCredits } from '../../services';

export const Tables = () => {
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
      <div>Tables</div>
      {/* <button onClick={() => getCredits()}>Click me!!</button> */}
    </>
  )
}
