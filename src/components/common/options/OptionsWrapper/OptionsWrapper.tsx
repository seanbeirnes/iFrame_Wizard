type Props = {
    children?: React.ReactElement;
}

export default function OptionsWrapper({ children }: Props){

    const delay = String(Math.random()*0.5)

    return (
        <div className="p-2 flex flex-wrap justify-between items-center rounded bg-white shadow hover:shadow-md hover:bg-gray-50 transition animate-slide-in" style={{animationDelay: `${delay}s`}}>
            {children}
        </div>
    )
}