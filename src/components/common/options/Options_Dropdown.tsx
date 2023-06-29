type Props = {
    label?: string;
}

export default function Options_Dropdown({ label }: Props){
    return (
        <div className="p-2 flex justify-between items-center rounded shadow bg-white border-ray-50 hover:shadow-md">
            <span className="text-sm text-gray-700">{label}</span>
            <div className="text-sm">Dropdown</div>
        </div>
    )
}