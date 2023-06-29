type Props = {
    title?: string;
}

export default function Button_Secondary({ title }: Props){
    return (
        <button type="button" className="text-xs text-sky-500 px-8 py-1 border-2 border-sky-400 border-solid rounded-full hover:bg-sky-400 hover:text-gray-50 active:bg-sky-300 transition">{title}</button>
    )
}