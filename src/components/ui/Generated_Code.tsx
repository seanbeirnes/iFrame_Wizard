
import Card from "../common/cards/Card/Card"
import { ButtonSecondary } from "../common/buttons"
import copyToClipboard from "../../services/clipboard/clipboard"
import { useEffect, useState } from "react";

type Props = {
    inner_text: string;
}

export default function GeneratedCode({inner_text}: Props){

    const copyMessage_Status = {
        reset: "reset",
        success: "success",
        failed: "failed"
    }

    const [copyMessage, setCopyMessage] = useState([copyMessage_Status.reset])

    const [intervalID, setIntervalID] = useState(null)
    
    // Calls repeatedly, so will need to be fixed.
    function reset(){
        if (intervalID === null){
            setIntervalID(setInterval(function(){setCopyMessage([...copyMessage, copyMessage_Status.reset])}, 5000))
        }
    }

    function copyClick(text: string){
        function success(){
            setCopyMessage([...copyMessage, copyMessage_Status.success])
            reset()
        }
        function fail(){
            setCopyMessage([...copyMessage, copyMessage_Status.failed])
            reset()
        }
        copyToClipboard(text, success, fail)
    }

    function changeClasses(status: any){
        if(status === copyMessage_Status.success){
            return "text-green-500 opacity-100"
        }else if(status === copyMessage_Status.failed){
            return "text-red-600 backdrop-opacity-100"
        }else if(status === copyMessage_Status.reset){
            return "opacity-0"
        }
    }

    function changeMessage(status: any){
        if(status.slice(-1)[0] === copyMessage_Status.success){
            return "Copied to clipboard!"
        }else if(status.slice(-1)[0] === copyMessage_Status.failed){
            return "Error copying to clipboard."
        }else if(status.slice(-1)[0] === copyMessage_Status.reset){
            console.log(status)
        }
    }

    let classes = changeClasses(copyMessage.slice(-1)[0])
    let message = changeMessage(copyMessage)

    return (
        <Card title="Generated Code">
            <div className="p-2 flex justify-between items-center">
                <p className={`text-base font-medium transition ${classes}`}>{message}</p>
                <ButtonSecondary title="Copy" handleClick={function(){copyClick(inner_text)}}/>
            </div>
            <div className="p-2">
                <textarea className="resize-none w-full min-h-max p-2 shadow-inner rounded-md border-2 border-gray-200 border-soli focus:border-sky-400 outline-2 outline-sky-400" value={inner_text} placeholder="Generated embed code will appear here." readOnly></textarea>
            </div>
        </Card>
    )
}

