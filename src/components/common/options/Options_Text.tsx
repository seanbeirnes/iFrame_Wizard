type Props = {
    label?: string;
}

export default function Options_Text({ label }: Props){
    return (
        <div className="p-2 flex justify-between items-center rounded shadow bg-white border-ray-50 hover:shadow-md">
            <span className="text-sm text-gray-700 mr-2">{label}</span>
            <label htmlFor="add-url"></label>
            <input className="p-1 border-2 grow border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-xs text-gray-500" type="text" name="add-url" id="add-url" placeholder="Enter additional iFrame properties here"/>
            <div className="text-sm ml-2">Add Icon</div>
        </div>
    )
}