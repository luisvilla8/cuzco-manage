import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { AxiosCall } from "../models";

export const useFetch =  () => {

  const [ loading, setLoading ] = useState(false);
  let controller : AbortController;

  const callEndPoint = async(axiosCall: AxiosCall<any>) => {
    setLoading(true);
    if(axiosCall.controller) controller = axiosCall.controller
    let result = {} as AxiosResponse<any>; 
    try {
      result = await axiosCall.call
    } catch (error: any) {
      setLoading(false)
    }
    setTimeout(() => setLoading(false),1000);
    return result;
  }

  useEffect(() => {
    return () => {
      controller && controller.abort();
    }
  },[])

  return { loading, callEndPoint }
}