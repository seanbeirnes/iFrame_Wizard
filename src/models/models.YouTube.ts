import { FormPropsData } from "../types/types";
import { formatResponse, formatEmbedCode } from "./shared/utils";

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

    const videoID = validateURL(settingsObject.url)

    if(!videoID){
        return formatResponse(false, "URL or Video ID invalid", "")
    }

    settingsObject.name = "YouTube video player";
    settingsObject.url = "https://www.youtube-nocookie.com/embed/" + videoID;
    (settingsObject.use_modest_branding || settingsObject.turn_off_related_videos) ? settingsObject.url += "?" : null;
    settingsObject.turn_off_related_videos ? settingsObject.url += "rel=0" : null;
    (settingsObject.use_modest_branding || settingsObject.turn_off_related_videos) ? settingsObject.url += "&" : null;
    settingsObject.use_modest_branding ? settingsObject.url += "modestbranding=1" : null;

    const embedCode = formatEmbedCode(settingsObject)

    return formatResponse(true, "operation succeded", embedCode)
    
}