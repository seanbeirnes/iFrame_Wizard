import { FormPropsData } from "../types/types";
import { formatResponse, formatAllowParams, formatEmbedCode_Flex } from "./shared/utils";

function validateURL(url: string){
    const reURL = new RegExp(/(https?:\/\/[a-z0-9\-]+\.voicethread\.com)\/share\/([0-9]{7,11})/)
    const matchURL = url.match(reURL)
    if(matchURL){
        return {urlStem: matchURL[1], id: matchURL[2]}
    }else{
        return false
    }
}

function formatAllowList(settingsObject: FormPropsData, urlStem: string){

    const camera = settingsObject.allow_camera ? `camera ${urlStem};` : "";
    const microphone = settingsObject.allow_microphone ? `microphone ${urlStem};` : "";
    const fullscreen = settingsObject.allow_fullscreen ? `fullscreen ${urlStem};` : "";

    const nbsp = " ";
    let allow_list = "";

    allow_list += camera;
    camera && (microphone || fullscreen) ? allow_list += nbsp : null;
    allow_list += microphone;
    microphone && fullscreen ? allow_list += nbsp : null;
    allow_list += fullscreen;

    return allow_list
}

export default function modelsVoicethread(settingsObject: FormPropsData){

    const matchResult = validateURL(settingsObject.url)

    if(!matchResult){
        return formatResponse(false, "URL or ID invalid", "")
    }
    
    const title = "VoiceThread player";
    const url = `${matchResult.urlStem}/app/player/?threadId=${matchResult.id}`;
    const allow_list = formatAllowList(settingsObject, matchResult.urlStem)
    const allow_params = formatAllowParams(settingsObject.allow_fullscreen, (settingsObject.allow_camera || settingsObject.allow_microphone));

    const embedCode = formatEmbedCode_Flex(settingsObject, title, url, allow_list, allow_params)

    return formatResponse(true, "operation succeeded", embedCode)
}