import { ChangeEventHandler } from "react";

type Props = { 
    id: string;
    value: string;
    options: Array<{value: string, text: string}>;
    changeHandler: ChangeEventHandler;
}

export default function OptionsPlayerWidth({ id, value, options, changeHandler}: Props){

    function MakeOption(value: string, text: string){
        return <option value={value}>{text}</option>
    }

    return (
        <select name="select-width" id={id} className="text-xs outline-2 outline-sky-400" onChange={changeHandler} value={value}>
            {options.map(item => MakeOption(item.value, item.text))}
        </select>
    )
}