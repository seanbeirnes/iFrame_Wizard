type Props = {
    src?: string;
}

export default function Button_Square({ src }: Props){
    return (
        <button type="button" className="w-12 h-12 p-1 rounded-md bg-white border-gray-50 border-2 shadow hover:shadow-md hover:bg-gray-50 active:shadow-inner transition  focus:border-sky-400 outline-2 outline-sky-400">
            <img src={src} />
        </button>
    )
}