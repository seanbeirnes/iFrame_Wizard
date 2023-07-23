import { ChangeEventHandler, ReactEventHandler } from "react";
import { OptionsWrapper } from "./OptionsWrapper";
import { ToggleSwitch } from "../buttons";

type Props = {
    label: string;
    input_id: string;
    toggle_id: string;
    active: boolean;
    value: string;
    place_holder: string;
    clickHandler: ReactEventHandler;
    changeHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function OptionsText({ label, input_id, toggle_id, active, value, place_holder, clickHandler, changeHandler }: Props){
    return (
        <OptionsWrapper>
            <>
                <span className={`${!active && "text-gray-400"} ${active && "text-gray-700"} text-sm mr-2 transition`}>{label}</span>
                <label htmlFor={label}></label>
                <input className="p-1 border-2 mr-2 grow border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-xs text-gray-500 disabled:bg-gray-300 disabled:text-gray-400 transition" type="text" name={label} placeholder={place_holder} id={input_id} disabled={!active} value={value} onChange={changeHandler}/>
                <ToggleSwitch active={active} id={toggle_id} clickHandler={clickHandler} />
            </>
        </OptionsWrapper>
    )
}