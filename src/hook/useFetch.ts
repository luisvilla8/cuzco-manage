import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { AxiosCall } from "../models";

export const useFetch =  () => {

  let controller : AbortController;

  const callEndPoint = async(axiosCall: AxiosCall<any>) => {
    if(axiosCall.controller) controller = axiosCall.controller
    let result = {} as AxiosResponse<any>; 
    try {
      result = await axiosCall.call
    } catch (error: any) {
      throw error
    }
    return result;
  }

  useEffect(() => {
    return () => {
      controller && controller.abort();
    }
  },[])

  return { callEndPoint }
}