import { FormPropsData } from "../types/types";
import { formatResponse } from "./shared/utils";

export default function modelsHtml5(settingsObject: FormPropsData){
    const url = settingsObject.url
    return formatResponse(true, "operation succeded", url + "HTML5")
}