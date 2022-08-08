import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, HistoryUrl, ModalAdd, ModalEdit } from './components'
import { ModalDelete } from './components/ModalDelete';
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
          <Routes>
            {/* <Route path="/" element={<ModalAdd />} /> */}
            <Route path="/tablas/*" element={<Tables />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  )
}

export default App
