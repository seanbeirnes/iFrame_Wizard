import { FormPropsData } from "../types/types";
import modelsVimeo from "./models.Vimeo";
import modelsVoicethread from "./models.VoiceThread";
import modelsYoutube from "./models.YouTube";
import modelsCanvas from "./models.canvas";
import modelsCustom from "./models.custom";
import modelsHtml5 from "./models.html5";

export default function modelsRouter(obj: FormPropsData){
    const settingsObject: FormPropsData = {...obj}

    switch (obj.id) {
        case "canvas":
            return modelsCanvas(settingsObject);
        case "custom":
            return modelsCustom(settingsObject);
        case "html5":
            return modelsHtml5(settingsObject);
        case "vimeo":
            return modelsVimeo(settingsObject);
        case "voicethread":
            return modelsVoicethread(settingsObject);
        case "youtube":
            return modelsYoutube(settingsObject);
        default:
            return modelsCustom(settingsObject);
    }
}