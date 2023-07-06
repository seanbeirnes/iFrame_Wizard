type Props = {
    children?: React.ReactElement;
}

export default function OptionsWrapper({ children }: Props){
    return (
        <div className="p-2 flex flex-wrap justify-between items-center rounded bg-white shadow hover:shadow-md transition-shadow">
            {children}
        </div>
    )
}