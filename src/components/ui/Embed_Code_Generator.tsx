import * as settings from "../../data/settings.json"
import { ChangeEvent, useState } from "react"
import {Card, CardSection} from "../common/cards"
import {ButtonPrimary, ButtonSquare} from "../common/buttons"
import { OptionsTextInput, OptionsToggle, OptionsDropdown } from "../common/options"
import GeneratedCode from "./Generated_Code.tsx"

export default function EmbedCodeGen(){

    const [formProps, setFormProps] = useState<{
        [index: string]: boolean | string;
        allow_fullscreen: boolean;
        player_max_size: string;
        player_max_size_width: string;
        player_max_size_height: string;
        use_modest_branding: boolean;
        turn_off_related_videos: boolean;
        use_custom_props: boolean;
        use_custom_props_value: string;
        url: string;
    }>({
        allow_fullscreen: true,
        player_max_size: "default",
        player_max_size_width: "560",
        player_max_size_height: "315",
        use_modest_branding: true,
        turn_off_related_videos: true,
        use_custom_props: false,
        use_custom_props_value: "",
        url: "",
    });

    function handleFormProps_string(e: ChangeEvent<HTMLInputElement>){
        const elementID = (e.target as HTMLInputElement).id.split("-")[0]

        let value: any = (e.target as HTMLInputElement).value

        // Handle aspect ratio checking for width and height settings
        if(elementID === "player_max_size_width"){
            let height: string = String(Math.floor(Number(value) * 0.5625))
            setFormProps(existingValues => ({
                ...existingValues,
                ["player_max_size_width"]: value,
                ["player_max_size_height"]: height
            }))

        // Handle all other values   
        }else if(e.target){
            setFormProps(existingValues => ({
                ...existingValues,
                [elementID]: value
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

    const [embedCode, setEmbedCode] = useState<{
        [index: string]: string
        text: string
    }>({text:""})

    function submitHandler(){
        setEmbedCode({text: JSON.stringify(formProps)})
    }

    return (
        <>
        <Card title="(Insert Name) Embed Code Generator">
            <CardSection title="Select a template or choose the gear icon to customize">
                <div className="px-2 flex flex-wrap gap-2">
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" clickHandler={function(){}} />
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" clickHandler={function(){}} />
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" clickHandler={function(){}} />
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" clickHandler={function(){}} />
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" clickHandler={function(){}} />
                    <ButtonSquare src="./src/assets/images/icons/settings-outline.svg" clickHandler={function(){}} />
                </div>
            </CardSection>
            <CardSection title="Add the iFrame Source">
                <div className="px-2">
                    <label htmlFor="add-url"></label>
                    <input className="p-1 w-full border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-sm text-gray-500" type="text" id="url" name="add-url" placeholder="Paste or type in source URL (or ID for videos)" value={formProps.url} onChange={handleFormProps_string}/>
                </div>
            </CardSection>
            <CardSection title="Set options">
                <div className="px-2 grid grid-flow-row grid-cols-1 gap-2">
                    <OptionsToggle label="Allow fullscreen:" id="allow_fullscreen" active={formProps.allow_fullscreen} clickHandler={handleFormProps_bool}/>
                    <OptionsToggle label="Use modest branding:" id="use_modest_branding" active={formProps.use_modest_branding} clickHandler={handleFormProps_bool}/>
                    <OptionsToggle label="Turn off related videos:" id="turn_off_related_videos" active={formProps.turn_off_related_videos} clickHandler={handleFormProps_bool}/>
                    <OptionsDropdown label="Player maximum size:" id="player_max_size" value={formProps.player_max_size} options={settings.player_width_selction_options} width={formProps.player_max_size_width} height={formProps.player_max_size_height} changeHandler={handleFormProps_string}/>
                    <OptionsTextInput label="Custom properties:" toggle_id="use_custom_props" input_id="use_custom_props_value" active={formProps.use_custom_props} clickHandler={handleFormProps_bool} value={formProps.use_custom_props_value} changeHandler={handleFormProps_string}/>
                    <ButtonPrimary title="Generate Embed Code" clickHandler={submitHandler}/>
                </div>
            </CardSection>
        </Card>
        <GeneratedCode inner_text={embedCode.text}/>
        </>
    )
}