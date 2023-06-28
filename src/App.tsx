import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<header className="p-2 shadow-md">
        <div className="flex justify-between">
            <div className="">
                <h1 className="text-2xl font-bold text-sky-700">iFrame Wizard</h1>
                <p className="text-xs font-normal text-gray-600 ">Responsive Embed Code Generator</p>
            </div>
            <div className="inline-flex gap-2 ">
                <img src="./src/assets/images/help.svg" />
                <img src="./src/assets/images/help.svg" />
            </div>
        </div>       
    </header>

    <main className="container mx-auto p-2">
        <section className="shadow-md rounded-md m-2 mb-4">
            <div className="bg-sky-800 rounded-t-md p-2">
                <h2 className="text-base font-medium text-gray-50 text-center">Help</h2>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">About</h3>
            </div>
            <div className="p-2 pb-4">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">Directions</h3>
            </div>
            <div className="p-2 pb-4">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
            </div>
        </section>

        <section className="shadow-md rounded-md m-2 mb-4">
            <div className="bg-sky-800 rounded-t-md p-2">
                <h2 className="text-base font-medium text-gray-50 text-center"><span className="font-extralight">(Insert Name)</span> Embed Code Generator</h2>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">Select a source vendor or choose the gear icon to customize</h3>
            </div>
            <div className="p-2 pb-4">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">Add the iFrame source</h3>
            </div>
            <div className="p-2 pb-4">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">Set options</h3>
            </div>
            <div className="p-4 grid grid-flow-row grid-cols-1 gap-4">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
                <button type="button" className="mx-auto px-8 py-2 text-xs font-bold text-gray-50 bg-sky-500 rounded-full shadow hover:bg-sky-400 hover:text-gray-50 hover:shadow-md transition">Generate Embed Code</button>
            </div>
        </section>

        <section className="shadow-md rounded-md m-2 mb-4">
            <div className="bg-sky-800 rounded-t-md p-2">
                <h2 className="text-base font-medium text-gray-50 text-center">Generated Code</h2>
            </div>
            <div className="p-2 flex justify-between items-center">
                <p className="text-base font-medium text-green-500">Copied to clipboard!</p>
                <button type="button" className="text-xs text-sky-500 px-8 py-1 border-2 border-sky-400 border-solid rounded-full hover:bg-sky-400 hover:text-gray-50 transition">Copy</button>
            </div>
            <div className="p-2">
                <textarea className="w-full p-2 shadow-inner rounded-md border-2 border-gray-200 border-solid">Something goes here</textarea>
            </div>
        </section>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
