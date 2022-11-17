import { Outlet } from "react-router-dom"
import { Header, HistoryUrl } from "../../components"

export const WithNav = () => {
  return (
    <>
      <Header />
      <HistoryUrl /> 
      <Outlet />
    </>
  )
}
