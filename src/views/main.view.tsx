import { useState } from "react";
import { Header, Main, Footer } from "../components/common/layout"
import { ButtonSquare } from "../components/common/buttons"

import Help from "../components/ui/Help";
import { EmbedCodeGen } from "../components/EmbedCodeGen";

export default function MainView(){

    const [helpActive, setHelpActive] = useState(false);

    const helpClick = () => {
      setHelpActive((active: boolean) => !active)
    }
  
    const resetClick = () => {
      location.reload()
    }
  
    return (
        <>
        <div className='bg-white'>
          <Header>
            <ButtonSquare src="./src/assets/images/icons/refresh-outline.svg" clickHandler={resetClick}/>
            <ButtonSquare src="./src/assets/images/icons/help-outline.svg" clickHandler={helpClick}/>
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