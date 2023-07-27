import { FormPropsData } from "../types/types";
import { formatResponse } from "./shared/utils";

export default function modelsCanvas(settingsObject: FormPropsData){
    const url = settingsObject.url
    return formatResponse(true, "operation succeded", url + "Canvas")
}