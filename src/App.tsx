
import './App.css'
import { useState } from 'react'
import Header from "./components/layout/Header/Header.tsx"
import Main from "./components/layout/Main/Main.tsx"
import Footer from "./components/layout/Footer/Footer.tsx"
import Button_Square from "./components/common/buttons/Button_Square/Button_Square"
import Help from "./components/ui/Help.tsx";
import EmbedCodeGen from "./components/ui/Embed_Code_Generator.tsx";
import GeneratedCode from "./components/ui/Generated_Code.tsx";

function App() {

  const [helpActive, setHelpActive] = useState(false);

  const helpClick = () => {
    setHelpActive(active => !active)
  }

  return (
    <>
      <div className='bg-white'>
        <Header>
          <Button_Square src="./src/assets/images/icons/redo-svgrepo-com.svg"/>
          <Button_Square src="./src/assets/images/icons/help-svgrepo-com.svg" handleClick={helpClick}/>
        </Header>
        <Main>

          {helpActive && (<Help/>)}
          

          <EmbedCodeGen/>

          <GeneratedCode/>
        </Main>
      </div>
      <Footer/>
    </>
  )
}

export default App
