import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Header, HistoryUrl } from './components'
import { Tables } from './pages';
import { GlobalStyle, MainContainer } from './styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MainContainer>
          <HistoryUrl /> 
        </MainContainer>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
