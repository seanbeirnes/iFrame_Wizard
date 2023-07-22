import { FormPropsData } from "../types/types";
import { formatResponse } from "./common/utils";

export default function modelsYoutube(settingsObject: FormPropsData){
    const url = settingsObject.url
    return formatResponse(true, "operation succeded", url + "VoiceThread")
}