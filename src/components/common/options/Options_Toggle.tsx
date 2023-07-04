import { ReactEventHandler } from "react";

type Props = {
    label?: string;
    id?: string;
    active?: boolean;
    clickHandler?: ReactEventHandler;
}

export default function Options_Toggle({ label, id, active, clickHandler}: Props){
    return (
        <div className="p-2 flex justify-between items-center rounded shadow bg-white border-ray-50 hover:shadow-md">
            <span className="text-sm text-gray-700">{label}</span>
            <div className={`${!active && "bg-gray-400"} ${active && "bg-sky-300"} w-8 h-4 rounded-full flex items-center transition`} id={id} onClick={clickHandler}>
                <div className={`${!active && "translate-x-0"} ${active && "translate-x-4"} w-[14px] h-[14px] rounded-full bg-gray-50 transition`} id={id+"-toggle"} onClick={clickHandler}></div>
            </div>
        </div>
    )
}