
import './App.css'
import Home from './routes/Home'
import Service from './components/Service-section/Service'
import Daily from './components/Daily-section/Daily'
import Menu from './routes/Menu'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Home/>
      <Service />
      <Daily />
      <Menu />
      <Footer />
    </>
  )
}

export default App
