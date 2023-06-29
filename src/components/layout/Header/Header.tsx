import Button_Square from "../../common/buttons/Button_Square/Button_Square"

export default function Header(){
    return (
        <header className="p-2 bg-white shadow-md">
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
        </header>
    )
}