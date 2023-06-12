
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Service from './components/Service-section/Service'
import Daily from './components/Daily-section/Daily'
import Menu from './routes/Menu'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Service />
      <Daily />
      <Menu />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
