import { Button } from "./components/Button/Button"
import { HomeStyled, HomeTitle } from "./Home.styled"

export const Home = () => {
  return (
    <HomeStyled>
      <HomeTitle>
        <h4>AGROINVERSIONES</h4>
        <h1>CUSCO</h1>
      </HomeTitle>
      <Button>Registrar venta</Button>
      <Button>Registrar compra</Button>
    </HomeStyled>
  )
}
