
type Props = {
    children?: React.ReactNode;
}

export default function Header({children}: Props){
    return (
        <header className="p-2 bg-white shadow-md">
            <div className="flex justify-between">
                <div className="">
                    <h1 className="text-2xl font-bold text-sky-700">iFrame Wizard</h1>
                    <p className="text-xs font-normal text-gray-600 ">Responsive Embed Code Generator</p>
                </div>
                <div className="inline-flex gap-2 ">
                    {children}
                </div>
          </div>   
            
        </header>
    )
}