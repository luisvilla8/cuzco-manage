import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WithNav, WithOutNav } from './components'
import { ModalProvider } from './context';
import { Login, Tables } from './pages';
import { GlobalStyle, MainContainer } from './styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <MainContainer>
          <ModalProvider>
            <Routes>
              <Route element={<WithOutNav />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/tablas/*" element={<Tables />} />
              </Route>
            </Routes>
          </ModalProvider>
        </MainContainer>
      </BrowserRouter>
    </>
  )
}

export default App
