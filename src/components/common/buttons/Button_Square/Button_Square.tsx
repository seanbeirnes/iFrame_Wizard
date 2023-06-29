type Props = {
    children?: React.ReactNode;
}

export default function Button_Square({ children }: Props){
    return (
        <button type="button" className="w-12 h-12 p-1 rounded-md bg-white shadow hover:shadow-md hover:bg-gray-50 active:shadow-inner transition">
            {children}
        </button>
    )
}