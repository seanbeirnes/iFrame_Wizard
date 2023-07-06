type Props = {
    title?: string;
    children?: React.ReactNode;
}

export default function CardSection({ title, children }: Props){
    return (
        <>
            <div className="bg-gray-200 px-2 py-1">
                <h3 className="text-xs text-gray-600">{title}</h3>
            </div>
            <div className="px-4 py-2 pb-4">
                {children}
            </div>
        </>

    )
}