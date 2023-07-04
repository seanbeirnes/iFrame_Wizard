import { ChangeEventHandler } from "react";
import Options_Wrapper from "./Options_Wrapper";

type Props = { 
    label: string;
    id: string;
    value: string;
    width: string;
    height: string;
    changeHandler: ChangeEventHandler;
}

export default function Options_PlayerWidth({ label, id, value, width, height, changeHandler}: Props){

    let use_custom = value==="custom" ? true : false;

    return (
        <Options_Wrapper>
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

                <select name="select-width" id={id} className="text-xs outline-2 outline-sky-400" onChange={changeHandler} value={value}>
                    <option value="small">Small (426 x 240)</option>
                    <option value="default">Default (560 x 315)</option>
                    <option value="medium">Medium (640 x 360)</option>
                    <option value="large">Large (854 x 480)</option>
                    <option value="fill">Fill (100% width)</option>
                    <option value="custom">Custom</option>
                </select>
            </>
        </Options_Wrapper>
    )
}