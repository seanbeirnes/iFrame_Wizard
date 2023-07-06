import { ChangeEventHandler } from "react";
import { OptionsWrapper } from "./OptionsWrapper";
import { Dropdown } from "./Dropdown";

type Props = { 
    label: string;
    id: string;
    value: string;
    options: Array<{value: string, text: string}>
    width: string;
    height: string;
    changeHandler: ChangeEventHandler;
}

export default function OptionsPlayerWidth({ label, id, value, options, width, height, changeHandler}: Props){

    let use_custom = value==="custom" ? true : false;

    return (
        <OptionsWrapper>
            <>
                <span className="text-sm text-gray-700">{label}</span>

                {use_custom && (
                    <div className="flex flex-wrap items-center justify-center gap-2 ml-auto">
                        <div>
                            <label className="text-xs text-gray-700 pr-2">Width</label>
                            <input id={id+"_width"} className="px-1 w-16 border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-xs text-gray-500" type="number" placeholder="560" min="0" max="1920" step="10" value={width} onChange={changeHandler}></input>
                        </div>
                        <div>
                            <label className="text-xs text-gray-700 pr-2">Height</label>
                            <input id={id+"_height"} className="px-1 w-16 mr-2 border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-xs text-gray-500" type="number" placeholder="315" min="0" max="1080" step="10" value={height} onChange={changeHandler} disabled></input>
                        </div>
                        
                    </div>
                )}

                <Dropdown id={id} value={value} options={options} changeHandler={changeHandler}/>

            </>
        </OptionsWrapper>
    )
}