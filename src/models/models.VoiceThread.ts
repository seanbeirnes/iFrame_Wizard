import { FormPropsData } from "../types/types";
import { formatResponse, formatEmbedCode_Flex } from "./shared/utils";

function validateURL(url: string){
    const reURL = new RegExp(/(https?:\/\/[a-z0-9\-]+\.voicethread\.com)\/share\/([0-9]{7,11})/)
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
    
    settingsObject.name = "VoiceThread player";
    settingsObject.url = `${matchResult.urlStem}/app/player/?threadId=${matchResult.id}`;

    settingsObject.allow_fullscreen_allow_list = matchResult.urlStem;
    settingsObject.allow_camera_allow_list = matchResult.urlStem;
    settingsObject.allow_microphone_allow_list = matchResult.urlStem;

    const embedCode = formatEmbedCode_Flex(settingsObject, "", "", "", "")

    return formatResponse(true, "operation succeeded", embedCode)
}