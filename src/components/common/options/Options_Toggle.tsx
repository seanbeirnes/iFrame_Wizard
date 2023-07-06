import { ReactEventHandler } from "react";
import Options_Wrapper from "./Options_Wrapper";
import { ToggleSwitch } from "../buttons";

type Props = {
    label: string;
    id: string;
    active: boolean;
    clickHandler: ReactEventHandler;
}

export default function Options_Toggle({ label, id, active, clickHandler}: Props){
    return (
        <Options_Wrapper>
            <>
            <span className={`${!active && "text-gray-400"} ${active && "text-gray-700"} text-sm transition`}>{label}</span>
            <ToggleSwitch active={active} id={id} clickHandler={clickHandler} />
            </>
        </Options_Wrapper>
    )
}