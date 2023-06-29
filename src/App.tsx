
import './App.css'
import Header from "./components/layout/Header/Header.tsx"
import Main from "./components/layout/Main/Main.tsx"
import Footer from "./components/layout/Footer/Footer.tsx"
import Button_Square from "./components/common/buttons/Button_Square/Button_Square"
import Help from "./components/ui/Help.tsx";
import EmbedCodeGen from "./components/ui/Embed_Code_Generator.tsx";
import GeneratedCode from "./components/ui/Generated_Code.tsx";

function App() {

  return (
    <>
      <div className='bg-white'>
        <Header>
          <div className="flex justify-between">
            <div className="">
                <h1 className="text-2xl font-bold text-sky-700">iFrame Wizard</h1>
                <p className="text-xs font-normal text-gray-600 ">Responsive Embed Code Generator</p>
            </div>
            <div className="inline-flex gap-2 ">
                <Button_Square src="./src/assets/images/icons/redo-svgrepo-com.svg"/>
                <Button_Square src="./src/assets/images/icons/help-svgrepo-com.svg"/>
            </div>
          </div>   
        </Header>
        <Main>
          <Help/>

          <EmbedCodeGen/>

          <GeneratedCode/>
        </Main>
      </div>
      <Footer/>
    </>
  )
}

export default App
