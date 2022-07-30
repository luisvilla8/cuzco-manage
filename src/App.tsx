import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components'
import { Tables } from './pages';
import { GlobalStyle } from './styled-components';

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
