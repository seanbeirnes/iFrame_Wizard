
import './App.css'
import { useState } from 'react'
import { Header, Main, Footer } from './components/layout';
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
          <Button_Square src="./src/assets/images/icons/redo-svgrepo-com.svg" clickHandler={resetClick}/>
          <Button_Square src="./src/assets/images/icons/help-svgrepo-com.svg" clickHandler={helpClick}/>
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
