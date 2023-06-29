import Card from "../common/Card/Card"
import Button_Secondary from "../common/buttons/Button_Secondary/Button_Secondary"

type Props = {
    embed_code?: string;
}

export default function GeneratedCode({embed_code}: Props){
    return (
        <Card title="Generated Code">
            <div className="p-2 flex justify-between items-center">
                <p className="text-base font-medium text-green-500">Copied to clipboard!</p>
                <Button_Secondary title="Copy"/>
            </div>
            <div className="p-2">
                <textarea className="resize-none w-full min-h-max p-2 shadow-inner rounded-md border-2 border-gray-200 border-soli focus:border-sky-400 outline-2 outline-sky-400">{embed_code}</textarea>
            </div>
        </Card>
    )
}

