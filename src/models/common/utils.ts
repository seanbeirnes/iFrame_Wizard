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
    const accelerometer = settingsObject.allow_accelerometer ? "accelerometer;" : "";
    const autoplay = settingsObject.allow_autoplay ? "autoplay;" : "";
    const clipboard_write = settingsObject.allow_clipboard_write ? "clipboard-write;" : "";
    const encrypted_media = settingsObject.allow_encrypted_media ? "encrypted-media;" : "";
    const gyroscope = settingsObject.allow_gyroscope ? "gyroscope;" : "";
    const picture_in_picture = settingsObject.allow_picture_in_picture ? "picture-in-picture;" : "";
    const web_share = settingsObject.allow_web_share ? "web-share;" : "";
    const fullscreen = settingsObject.allow_fullscreen ? "fullscreen;" : "";
    const player_max_size_width = formatWidth(settingsObject)
    const custom_props = settingsObject.use_custom_props ? settingsObject.use_custom_props_value : "";

    return (
    `<div style="max-width: ${player_max_size_width};">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="border:none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;" title="${settingsObject.name}" src="${settingsObject.url}" width="560" height="315" allow="${accelerometer} ${autoplay} ${clipboard_write} ${encrypted_media} ${fullscreen} ${gyroscope} ${picture_in_picture} ${web_share}" ${custom_props}></iframe>
        </div>
    </div>`
    )
}