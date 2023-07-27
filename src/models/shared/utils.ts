import { FormPropsData } from "../../types/types"
import * as settings from "../../data/settings.json"

export function formatResponse(succeeded: boolean, message: string, text: string){
    return {succeeded: succeeded, message: message, text: text}
}

function formatWidth(settingsObject: FormPropsData){

    function getWidthSelection(){

        for (const index in settings.player_width_selction_options){

            const text = settings.player_width_selction_options[index].text
            const value = settings.player_width_selction_options[index].value      
            if(settingsObject.player_max_size === value ){

                const re = new RegExp(/.*\((\d+)/)
                const match = text.match(re)

                return match ? match[1] + "px" : null;
            }
        }
    }

    switch (settingsObject.player_max_size) {
        case "fill":
            return "100%";
        case "custom":
            return `${settingsObject.player_max_size_width}px`;
        default:
            return getWidthSelection()
    }
}


export function formatAllowList(settingsObject: FormPropsData){
    const accelerometer = settingsObject.allow_accelerometer ? "accelerometer; " : "";
    const autoplay = settingsObject.allow_autoplay ? "autoplay; " : "";

    const camera_allowed = settingsObject.allow_camera ? "camera; " : "";
    const camera_allow_list = settingsObject.allow_camera_allow_list
    const camera = camera_allow_list ? `camera ${camera_allow_list}; ` : camera_allowed;

    const clipboard_write = settingsObject.allow_clipboard_write ? "clipboard-write; " : "";
    const encrypted_media = settingsObject.allow_encrypted_media ? "encrypted-media; " : "";
    const gyroscope = settingsObject.allow_gyroscope ? "gyroscope; " : "";

    const microphone_allowed = settingsObject.allow_microphone ? "microphone; " : "";
    const microphone_allow_list = settingsObject.allow_microphone_allow_list
    const microphone = camera_allow_list ? `microphone ${microphone_allow_list}; ` : microphone_allowed;

    const picture_in_picture = settingsObject.allow_picture_in_picture ? "picture-in-picture; " : "";
    const web_share = settingsObject.allow_web_share ? "web-share; " : "";

    const fullscreen_allowed = settingsObject.allow_fullscreen ? "fullscreen; " : "";
    const fullscreen_allowed_list = settingsObject.allow_fullscreen_allow_list
    const fullscreen = fullscreen_allowed_list ? `fullscreen ${fullscreen_allowed_list}; ` : fullscreen_allowed;

    const custom_props = settingsObject.use_custom_props ? settingsObject.use_custom_props_value : "";

    return `${accelerometer}${autoplay}${camera}${clipboard_write}${encrypted_media}${fullscreen}${gyroscope}${microphone}${picture_in_picture}${web_share}${custom_props}`
}

export function formatAllowParams(allowFullScreen=false, allowUserMedia=false){
    let params = ""
    allowFullScreen ? params += "allowfullscreen " : null;
    allowUserMedia ? params += "allowusermedia " : null;

    return params
}

export function formatEmbedCode_Rigid(settingsObject: FormPropsData){
    
    return (
    `<div style="max-width: ${formatWidth(settingsObject)};">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" title="${settingsObject.name}" src="${settingsObject.url}" width="560" height="315" allow="${formatAllowList(settingsObject)}" ${formatAllowParams(settingsObject.allow_fullscreen, (settingsObject.allow_camera || settingsObject.allow_microphone))}></iframe>
        </div>
    </div>`
    )
}

export function formatEmbedCode_Flex(settingsObject: FormPropsData, title: string, url: string, allow_list: string, allow_params: string){
    const player_max_size_width = formatWidth(settingsObject)

    return (
    `<div style="max-width: ${player_max_size_width};">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" title="${title}" src="${url}" width="560" height="315" ${allow_list && 'allow="' + allow_list + '"'} ${allow_params && allow_params} ></iframe>
        </div>
    </div>`
    )
}

