import { FormPropsData } from "../types/types";
import { formatResponse } from "./common/utils";

function validateURL(url: string){
    const reURL = new RegExp(/^(?:https?:\/\/)(?:.+oembed.+)?(?:m\.|www\.)?(?:(?:youtube(?:\-nocookie)?\.com)|(?:youtu\.be))\/(?:(?:.*watch%3Fv%3D)|(?:(?:(?:watch\?(?:[a-z]+=[a-z_&]+)?v(?:=|%3D))|(?:(?:e\/)|(?:v\/)))?|(?:embed\/)))([a-zA-Z0-9_\-]{11})(?!.*http|[\.a-zA-Z]{3})/)
    const reID = new RegExp(/^([a-zA-Z0-9_\-]{11})$/)
    const matchURL = url.match(reURL)
    const matchID = url.match(reID)
    if(matchURL){
        return matchURL[1]
    }else if(matchID){
        return matchID[1]
    }else{
        return false
    }
}

export default function modelsYoutube(settingsObject: FormPropsData){

    const url = validateURL(settingsObject.url)
    if(!url){
        return formatResponse(false, "URL or Video ID invalid", "")
    }
    return formatResponse(true, "operation succeded", url)
    
}