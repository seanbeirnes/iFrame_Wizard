type Props = {
    title?: string;
    children?: React.ReactNode;
}

export default function Card_Section({ title, children }: Props){
    return (
        <>
            <div className="bg-sky-800 rounded-t-md p-2">
                <h2 className="text-base font-medium text-gray-50 text-center">{title}</h2>
            </div>
            <div className="bg-gray-200 px-2 py-1">
                {children}
            </div>
        </>

    )
}