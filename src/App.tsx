
import './App.css'
import { useState } from 'react'
import Header from "./components/layout/Header/Header.tsx"
import Main from "./components/layout/Main/Main.tsx"
import Footer from "./components/layout/Footer/Footer.tsx"
import Button_Square from "./components/common/buttons/ButtonSquare/ButtonSquare.tsx"
import Help from "./components/ui/Help.tsx";
import EmbedCodeGen from "./components/ui/Embed_Code_Generator.tsx";

function App() {

  const [helpActive, setHelpActive] = useState(false);

  const helpClick = () => {
    setHelpActive(active => !active)
  }

  const resetClick = () => {
    location.reload()
  }

  return (
    <>
      <div className='bg-white'>
        <Header>
          <Button_Square src="./src/assets/images/icons/redo-svgrepo-com.svg" handleClick={resetClick}/>
          <Button_Square src="./src/assets/images/icons/help-svgrepo-com.svg" handleClick={helpClick}/>
        </Header>
        <Main>

          {helpActive && (<Help/>)}
          
          <EmbedCodeGen/>

        </Main>
      </div>
      <Footer/>
    </>
  )
}

export default App
