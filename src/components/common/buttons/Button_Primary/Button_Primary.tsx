type Props = {
    title?: string;
}

export default function Button_Primary({ title }: Props){
    return (
        <button type="button" className="mx-auto px-8 py-2 text-xs font-bold text-gray-50 bg-sky-500 rounded-full shadow hover:bg-sky-400 hover:text-gray-50 hover:shadow-md active:shadow-inner active:bg-sky-300 transition">{title}</button>
    )
}