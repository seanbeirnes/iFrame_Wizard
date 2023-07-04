type Props = {
    children?: React.ReactElement;
}

export default function Options_Wrapper({ children }: Props){
    return (
        <div className="p-2 flex justify-between items-center rounded bg-white shadow hover:shadow-md transition-shadow">
            {children}
        </div>
    )
}