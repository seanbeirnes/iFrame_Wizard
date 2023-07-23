
import { useState, useEffect, useRef } from "react";
import { Card } from "../common/cards";
import { ButtonSecondary } from "../common/buttons"
import copyToClipboard from "../../services/clipboard/clipboard"
import { TimedText } from "../common/notifications";

type Props = {
    inner_text: string;
}

export default function GeneratedCode({inner_text}: Props){

    const [copyStatus, setCopyStatus] = useState({
        show: false,
        success: false
    })

    function copyClick(text: string){
        // Change copyStatus to default to force rerender
        setCopyStatus({
            show: false,
            success: false,
        })

        function success(){
            setCopyStatus({
                show: true,
                success: true
            })
        }

        function fail(){
            setCopyStatus({
                show: true,
                success: false
            })
        }

        copyToClipboard(text, success, fail)
        
    }

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect( () => {
        if(inner_text){
            copyClick(inner_text)
        }

        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight * 1.1}px `;
        }
    }, [inner_text])

    return (
        <Card title="Generated Code">
            <div className="p-2 flex justify-between items-center">
                <div>
                {copyStatus.show && <TimedText className={`text-base font-medium ${copyStatus.success ? "text-green-500" : "text-red-600"}`} text={copyStatus.success ? "Copied to clipboard! " : "Error copying to clipboard."} />}
                </div>
                <ButtonSecondary title="Copy" clickHandler={function(){copyClick(inner_text)}}/>
            </div>
            <div className="p-2">
                <textarea ref={textareaRef} className={"resize-none w-full p-2 shadow-inner rounded-md border-2 border-solid border-gray-200 focus:border-sky-400 outline-2 outline-sky-400 " + (copyStatus.show && "animate-border-glow")} value={inner_text} placeholder="Generated embed code will appear here." readOnly></textarea>
            </div>
        </Card>
    )
}

