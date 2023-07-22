export default function modelsRouter(settingsObject){

    function formatResponse(succeeded, message, text){
        return {succeeded: succeeded, message: message, text: text}
    }

    let response = ""
    
    switch (settingsObject.name) {
        case "canvas":
             response = "This is Canvas.";
             break;
        case "custom":
            response = "This is a custom video player.";
            break;
        case "html5":
            response = "This is HTML5.";
            break;
        case "vimeo":
            response = "This is Vimeo.";
            break;
        case "voicethread":
            response = "This is VoiceThread.";
            break;
        case "youtube":
            response = "This is Youtube.";
            break;
        default:
            response = "Error: unknown video player.";
            break;
    }

    return formatResponse(false, "The operation succeeded", response)
}