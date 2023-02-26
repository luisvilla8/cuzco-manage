import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider, WithNav, WithOutNav, Message } from './components'
import { BillProvider } from './context/BillProvider';
import { Login, Tables, Register, Home } from './pages';
import { GlobalStyle } from './styled-components';

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalProvider>
          <Message />
          <Routes>
            <Route element={<WithOutNav />}>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<WithNav />}>
              <Route path="/home" element={<BillProvider><Home /></BillProvider>} />
              <Route path="/tablas/*" element={<Tables />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
