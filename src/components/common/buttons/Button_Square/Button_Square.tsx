import { ReactEventHandler } from "react";

type Props = {
    handleClick?: ReactEventHandler;
    src?: string;
}

export default function Button_Square({ handleClick, src }: Props){

    return (
        <button type="button" className="w-12 h-12 p-1 rounded-md bg-white border-gray-50 border-2 shadow hover:shadow-md hover:bg-gray-50 active:shadow-inner transition outline-2 outline-sky-400" 
        onClick={ handleClick }>
            <img src={src} />
        </button>
    )
}