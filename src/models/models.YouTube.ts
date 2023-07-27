import { FormPropsData } from "../types/types";
import { formatResponse, formatEmbedCode_Flex, formatAllowParams } from "./shared/utils";

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

function formatYouTubeURL(settingsObject: FormPropsData, videoID: string){
    let url = settingsObject.use_enhanced_privacy ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
    url += videoID;

    (settingsObject.use_modest_branding || settingsObject.turn_off_related_videos) ? settingsObject.url += "?" : null;

    settingsObject.turn_off_related_videos ? settingsObject.url += "rel=0" : null;

    (settingsObject.use_modest_branding && settingsObject.turn_off_related_videos) ? settingsObject.url += "&" : null;

    settingsObject.use_modest_branding ? settingsObject.url += "modestbranding=1" : null;

    return url
}

function formatAllowList(settingsObject: FormPropsData){
    const accelerometer = settingsObject.allow_accelerometer ? "accelerometer; " : "";
    const autoplay = settingsObject.allow_autoplay ? "autoplay; " : "";

    const clipboard_write = settingsObject.allow_clipboard_write ? "clipboard-write; " : "";
    const encrypted_media = settingsObject.allow_encrypted_media ? "encrypted-media; " : "";
    const gyroscope = settingsObject.allow_gyroscope ? "gyroscope; " : "";

    const picture_in_picture = settingsObject.allow_picture_in_picture ? "picture-in-picture; " : "";
    const web_share = settingsObject.allow_web_share ? "web-share; " : "";

    const custom_props = settingsObject.use_custom_props ? settingsObject.use_custom_props_value : "";

    return `${accelerometer}${autoplay}${clipboard_write}${encrypted_media}${gyroscope}${picture_in_picture}${web_share}${custom_props}`
}

export default function modelsYoutube(settingsObject: FormPropsData){  
    const videoID = validateURL(settingsObject.url)

    if(!videoID){
        return formatResponse(false, "URL or Video ID invalid", "")
    }

    const title = "YouTube video player"
    const url = formatYouTubeURL(settingsObject, videoID)
    const allow_list = formatAllowList(settingsObject)
    const allow_params = formatAllowParams(settingsObject.allow_fullscreen, false)
    
    const embedCode = formatEmbedCode_Flex(settingsObject, title, url, allow_list, allow_params)

    return formatResponse(true, "operation succeded", embedCode)
    
}