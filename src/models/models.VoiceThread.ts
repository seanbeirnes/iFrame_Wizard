import { FormPropsData } from "../types/types";
import { formatResponse, formatEmbedCode } from "./common/utils";

function validateURL(url: string){
    const reURL = new RegExp(/(https?:\/\/[a-z0-9-]+\.voicethread\.com)\/share\/([0-9]{7,11})/)
    const matchURL = url.match(reURL)
    if(matchURL){
        return {urlStem: matchURL[1], id: matchURL[2]}
    }else{
        return false
    }
}

export default function modelsVoicethread(settingsObject: FormPropsData){

    const matchResult = validateURL(settingsObject.url)

    if(!matchResult){
        return formatResponse(false, "URL or ID invalid", "")
    }
    // Need to add camera and microphone to "allow" options with optional url or none as additional values. Do not need to add "allowusermedia" it is a deprecated attribute.
    settingsObject.name = "VoiceThread player";
    settingsObject.url = `${matchResult.urlStem}/app/player/?threadId=${matchResult.id}`;

    settingsObject.allow_camera = true;
    settingsObject.allow_camera_allow_list = matchResult.urlStem;
    settingsObject.allow_microphone = true;
    settingsObject.allow_microphone_allow_list = matchResult.urlStem;

    const embedCode = formatEmbedCode(settingsObject)

    return formatResponse(true, "operation succeeded", embedCode)
}