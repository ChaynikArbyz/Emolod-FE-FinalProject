import './App.css'

import NotLoginedHeader from './components/NotLoginedHeader/index.tsx';
import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';

function App() {
  return (
    <>
      <NotLoginedHeader />
      <Header />
      <div style={{backgroundColor: "#fff", height: "1000px"}}>  </div>
      <Footer />
    </>
  )
}

export default App
