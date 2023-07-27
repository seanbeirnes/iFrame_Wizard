import { ReactEventHandler } from "react";

type Props = {
    clickHandler: ReactEventHandler;
    src: string;
}

export default function ButtonSquare({ clickHandler, src }: Props){

    return (
        <button type="button" className="w-12 h-12 p-1 rounded-md bg-gray-50 shadow hover:shadow-md hover:bg-gray-200 hover:opacity-70 active:shadow-inner transition outline-2 outline-sky-400" onClick={ clickHandler }>
            <img src={src} />
        </button>
    )
}