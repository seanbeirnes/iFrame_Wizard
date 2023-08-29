import { ReactEventHandler } from "react";

type Props = {
    clickHandler: ReactEventHandler;
    src: string;
    bkg?: string;
    active?: boolean;
}

export default function ButtonSquare({ clickHandler, src, bkg="bg-gray-50", active=false }: Props){

    return (
        <button type="button" className={`w-12 h-12 p-1 rounded-md ${active?"white shadow-md" : bkg+" hover:bg-gray-200 hover:shadow-md hover:opacity-70 active:shadow-inner"} shadow  transition outline-2 outline-sky-400`} onClick={ clickHandler }>
            <img src={src} />
        </button>
    )
}