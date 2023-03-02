import { useState } from "react"

export const useToggle = (initialValue = false) => {

  const [ value, setValue ] = useState(initialValue)

  const turnOnValue = () => {
    setValue(true)
  }

  const turnOffValue = () => {
    setValue(false)
  }

  return {value, turnOffValue, turnOnValue}
}
