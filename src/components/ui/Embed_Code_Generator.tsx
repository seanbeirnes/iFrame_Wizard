import Card from "../common/Card/Card"
import Card_Section from "../common/Card/Card_Section/Card_Section"
import Button_Primary from "../common/buttons/Button_Primary/Button_Primary"
import Button_Square from "../common/buttons/Button_Square/Button_Square"
import Options_Toggle from "../common/options/Options_Toggle.tsx"
import Options_Dropdown from "../common/options/Options_Dropdown.tsx"
import Options_Text from "../common/options/Options_Text.tsx"
import { ChangeEvent, useState } from "react"

export default function EmbedCodeGen(){

    const [formProps, setFormProps] = useState<{
        [index: string]: boolean | string;
        allow_fullscreen: boolean;
        use_modest_branding: boolean;
        turn_off_related_videos: boolean;
        use_custom_props: boolean;
        use_custom_props_value: string;
        url: string;
    }>({
        allow_fullscreen: true,
        use_modest_branding: true,
        turn_off_related_videos: true,
        use_custom_props: false,
        use_custom_props_value: "",
        url: "",
    });

    function handleFormProps_string(e: ChangeEvent<HTMLInputElement>){
        const elementID = (e.target as HTMLInputElement).id.split("-")[0]

        if(e.target){
            setFormProps(existingValues => ({
                ...existingValues,
                [elementID]: (e.target as HTMLInputElement).value
            }))
        }
    }

    function handleFormProps_bool(e: ChangeEvent<HTMLInputElement>){
        const elementID: string = (e.target as HTMLElement).id.split("-")[0]
        
        let value: any = formProps[elementID]

        if(e.target){
            setFormProps(existingValues => ({
                ...existingValues,
                [elementID]: !value
            }))
        }
    }

    const submitHandler = () => {
        alert(formProps.url)
        console.log(formProps)
    }

    return (
        <Card title="(Insert Name) Embed Code Generator">
            <Card_Section title="Select a template or choose the gear icon to customize">
                <div className="px-2 flex flex-wrap gap-2">
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/icons/settings-svgrepo-com.svg" />
                </div>
            </Card_Section>
            <Card_Section title="Add the iFrame Source">
                <div className="px-2">
                    <label htmlFor="add-url"></label>
                    <input className="p-1 w-full border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-sm text-gray-500" type="text" id="url" name="add-url" placeholder="Paste or type in source URL (or ID for videos)" value={formProps.url} onChange={handleFormProps_string}/>
                </div>
            </Card_Section>
            <Card_Section title="Set options">
                <div className="px-2 grid grid-flow-row grid-cols-1 gap-2">
                    <Options_Toggle label="Allow fullscreen:" id="allow_fullscreen" active={formProps.allow_fullscreen} clickHandler={handleFormProps_bool}/>
                    <Options_Toggle label="Use modest branding:" id="use_modest_branding" active={formProps.use_modest_branding} clickHandler={handleFormProps_bool}/>
                    <Options_Toggle label="Turn off related videos:" id="turn_off_related_videos" active={formProps.turn_off_related_videos} clickHandler={handleFormProps_bool}/>
                    <Options_Dropdown label="Player maximum size:" />
                    <Options_Text label="Custom properties:" toggle_id="use_custom_props" input_id="use_custom_props_value" active={formProps.use_custom_props} clickHandler={handleFormProps_bool} value={formProps.use_custom_props_value} changeHandler={handleFormProps_string}/>
                    <Button_Primary title="Generate Embed Code" clickHandler={submitHandler}/>
                </div>
            </Card_Section>
        </Card>
    )
}