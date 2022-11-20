import { Outlet } from "react-router-dom"
import { Header, HistoryUrl } from "../../components"
import { MainContainer } from "../../styled-components"

export const WithNav = () => {
  return (
    <MainContainer>
      <Header />
      <HistoryUrl /> 
      <Outlet />
    </MainContainer>
  )
}
