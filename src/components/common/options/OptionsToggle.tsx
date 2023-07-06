import { ReactEventHandler } from "react";
import { OptionsWrapper } from "./OptionsWrapper";
import { ToggleSwitch } from "../buttons";

type Props = {
    label: string;
    id: string;
    active: boolean;
    clickHandler: ReactEventHandler;
}

export default function OptionsToggle({ label, id, active, clickHandler}: Props){
    return (
        <OptionsWrapper>
            <>
            <span className={`${!active && "text-gray-400"} ${active && "text-gray-700"} text-sm transition`}>{label}</span>
            <ToggleSwitch active={active} id={id} clickHandler={clickHandler} />
            </>
        </OptionsWrapper>
    )
}