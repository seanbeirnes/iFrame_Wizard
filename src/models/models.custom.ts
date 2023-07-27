import { FormPropsData } from "../types/types";
import { formatResponse, formatEmbedCode_Rigid } from "./shared/utils";

function validateURL(url: string){
    const reURL = new RegExp(/^(?:https?:\/\/)(?:[a-z0-9\-]+\.){1,}[a-z]{2,}(?:\/.*)?$/)
    const matchURL = url.match(reURL)
    return matchURL ? true : false;
}

export default function modelsCustom(settingsObject: FormPropsData){

    const matchResult = validateURL(settingsObject.url)

    if(!matchResult){
        return formatResponse(false, "URL is invalid.", "")
    }

    const embedCode = formatEmbedCode_Rigid(settingsObject)

    return formatResponse(true, "operation succeeded", embedCode)
}