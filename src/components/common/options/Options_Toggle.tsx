import { ReactEventHandler } from "react";
import Options_Wrapper from "./Options_Wrapper";

type Props = {
    label?: string;
    id?: string;
    active?: boolean;
    clickHandler?: ReactEventHandler;
}

export default function Options_Toggle({ label, id, active, clickHandler}: Props){
    return (
        <Options_Wrapper>
            <>
            <span className={`${!active && "text-gray-400"} ${active && "text-gray-700"} text-sm transition`}>{label}</span>
            <div className={`${!active && "bg-gray-400"} ${active && "bg-sky-300"} w-8 h-4 rounded-full flex items-center transition`} id={id} onClick={clickHandler}>
                <div className={`${!active && "translate-x-[1px]"} ${active && "translate-x-[17px]"} w-[14px] h-[14px] rounded-full bg-gray-50 transition`} id={id+"-toggle"} onClick={clickHandler}></div>
            </div>
            </>
        </Options_Wrapper>
    )
}