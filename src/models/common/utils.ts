import { FormPropsData } from "../../types/types"
import * as settings from "../../data/settings.json"

export function formatResponse(succeeded: boolean, message: string, text: string){
    return {succeeded: succeeded, message: message, text: text}
}

export function formatWidth(settingsObject: FormPropsData){

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

export function formatEmbedCode(settingsObject: FormPropsData){
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

    const player_max_size_width = formatWidth(settingsObject)
    const custom_props = settingsObject.use_custom_props ? settingsObject.use_custom_props_value : "";

    return (
    `<div style="max-width: ${player_max_size_width};">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" title="${settingsObject.name}" src="${settingsObject.url}" width="560" height="315" allow="${accelerometer}${autoplay}${camera}${clipboard_write}${encrypted_media}${fullscreen}${gyroscope}${microphone}${picture_in_picture}${web_share}${custom_props}" ${fullscreen && "allowfullscreen"} ${(camera || microphone) && "allowusermedia"} ></iframe>
        </div>
    </div>`
    )
}