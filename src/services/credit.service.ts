import axios from "axios";
import { Credit } from "../models";
import { loadAbort } from "../util";

export const getAllCredits = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Credit>('http://localhost:3000/creditos',{ signal: controller.signal }),
    controller
  }
}