import { ReactEventHandler } from "react";

type Props = {
    handleClick?: ReactEventHandler;
    title?: string;
}

export default function Button_Secondary({ handleClick, title }: Props){
    return (
        <button type="button" className="text-xs text-sky-500 px-8 py-1 border-2 border-sky-400 border-solid rounded-full hover:bg-sky-400 hover:text-gray-50 active:bg-sky-300 transition outline-2 outline-sky-400" onClick={handleClick}>{title}</button>
    )
}