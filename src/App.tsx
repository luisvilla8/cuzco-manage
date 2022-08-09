import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, HistoryUrl } from './components'
import { ModalProvider } from './context';
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
          <ModalProvider>
            <Routes>
              {/* <Route path="/" element={<ModalEdit />} /> */}
              <Route path="/tablas/*" element={<Tables />} />
            </Routes>
          </ModalProvider>
        </MainContainer>
      </BrowserRouter>
    </>
  )
}

export default App
