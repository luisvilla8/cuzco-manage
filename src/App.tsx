import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WithNav, WithOutNav } from './components'
import { ModalProvider } from './context';
import { Login, Tables, Register } from './pages';
import { GlobalStyle } from './styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ModalProvider>
          <Routes>
            <Route element={<WithOutNav />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<WithNav />}>
              <Route path="/tablas/*" element={<Tables />} />
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
