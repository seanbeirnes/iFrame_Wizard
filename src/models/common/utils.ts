export function formatResponse(succeeded: boolean, message: string, text: string){
    return {succeeded: succeeded, message: message, text: text}
}