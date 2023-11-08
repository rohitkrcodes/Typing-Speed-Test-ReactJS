import { useContext } from "react"
import { TypeContext } from "../context/TypeContext"

export const useTypeContext = () => {
  const context = useContext(TypeContext)

  if(!context) {
    throw Error('useTypeContext must be used inside an TypeContextProvider')
  }

  return context
}