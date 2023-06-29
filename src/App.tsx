
import './App.css'
import Header from "./components/layout/Header/Header.tsx"
import Main from "./components/layout/Main/Main.tsx"
import Footer from "./components/layout/Footer/Footer.tsx"

function App() {

  return (
    <>
      <div className='bg-white'>
        <Header/>
        <Main/>
      </div>
      <Footer/>
    </>
  )
}

export default App
