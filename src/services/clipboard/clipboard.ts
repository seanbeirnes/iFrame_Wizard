export default async function copyToClipboard(text: string, callback_success: Function, callback_fail: Function){{
        try{
            await navigator.clipboard.writeText(text);
            callback_success()
            return true
        } catch (err) {
            callback_fail()
            return false
        }
    }
}