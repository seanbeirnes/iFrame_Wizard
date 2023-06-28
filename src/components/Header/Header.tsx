export default function Header(){
    return (
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
    )
}