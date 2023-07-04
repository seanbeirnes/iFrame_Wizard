import { ChangeEvent, ChangeEventHandler, ReactEventHandler } from "react";
import Options_Wrapper from "./Options_Wrapper";

type Props = {
    label?: string;
    input_id?: string;
    toggle_id?: string;
    active?: boolean;
    value?: string;
    clickHandler?: ReactEventHandler;
    changeHandler?: ChangeEventHandler<HTMLInputElement>;
}

export default function Options_Text({ label, input_id, toggle_id, active, value, clickHandler, changeHandler }: Props){
    return (
        <Options_Wrapper>
            <>
                <span className={`${!active && "text-gray-400"} ${active && "text-gray-700"} text-sm mr-2`}>{label}</span>
                <label htmlFor={label}></label>
                <input className="p-1 border-2 grow border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-xs text-gray-500 disabled:bg-gray-300 disabled:text-gray-400" type="text" name={label} placeholder="Enter additional iFrame properties here" id={input_id} disabled={!active} value={value} onChange={changeHandler}/>
                <div className={`${!active && "bg-gray-400"} ${active && "bg-sky-300"} ml-2 w-8 h-4 rounded-full flex items-center transition`} id={toggle_id} onClick={clickHandler}>
                    <div className={`${!active && "translate-x-[1px]"} ${active && "translate-x-[17px]"} w-[14px] h-[14px] rounded-full bg-gray-50 transition`} id={toggle_id+"-toggle"} onClick={clickHandler}></div>
                </div>
            </>
        </Options_Wrapper>
    )
}