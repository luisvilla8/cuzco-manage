import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider, WithNav, WithOutNav } from './components'
import { Login, Tables, Register } from './pages';
import { GlobalStyle } from './styled-components';

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalProvider>
          <Routes>
            <Route element={<WithOutNav />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<WithNav />}>
              <Route path="/home" element={<Tables />} />
              <Route path="/tablas/*" element={<Tables />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
