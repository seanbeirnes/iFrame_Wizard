import * as settings from "../../data/settings.json"
import * as profilesJOSN from "../../data/embed_profiles.json"
import { ChangeEvent, useState } from "react"
import {Card, CardSection} from "../common/cards/index.tsx"
import {ButtonPrimary, ButtonSecondary, ButtonSquare} from "../common/buttons/index.tsx"
import { OptionsTextInput, OptionsToggle, OptionsDropdown } from "../common/options/index.tsx"
import GeneratedCode from "./Generated_Code.tsx"
import { ProfileSettingsData } from "./EmbedCodeGen.types.ts"

const profiles: ProfileSettingsData = profilesJOSN

export default function EmbedCodeGen(){

    const [useProfile, setUseProfile] = useState("youtube")

    function handleProfileChange(newProfile: string){
        setUseProfile(newProfile)
    }

    const profile = profiles[useProfile]

    const [showMore, setShowMore] = useState(false)

    function handleShowMore(){
        setShowMore(!showMore)
    }

    const show_advanced: boolean = true

    const [formProps, setFormProps] = useState<{
        [index: string]: boolean | string;
        name: string;
        allow_accelerometer: boolean;
        allow_autoplay: boolean;
        allow_clipboard_write: boolean;
        allow_encrypted_media: boolean;
        allow_gyroscope: boolean;
        allow_picture_in_picture: boolean;
        allow_web_share: boolean;
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
        name: profile.name,
        allow_accelerometer: profile.allow_accelerometer.active,
        allow_autoplay: profile.allow_autoplay.active,
        allow_clipboard_write: profile.allow_clipboard_write.active,
        allow_encrypted_media: profile.allow_encrypted_media.active,
        allow_gyroscope: profile.allow_gyroscope.active,
        allow_picture_in_picture: profile.allow_picture_in_picture.active,
        allow_web_share: profile.allow_web_share.active,
        allow_fullscreen: profile.allow_fullscreen.active,
        player_max_size: "default",
        player_max_size_width: "560",
        player_max_size_height: "315",
        use_modest_branding: profile.use_modest_branding.active,
        turn_off_related_videos: profile.use_modest_branding.active,
        use_custom_props: profile.use_custom_properties.active,
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
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-logo.svg" clickHandler={function(){
                        handleProfileChange("youtube")
                    }} />
                    <ButtonSquare src="./src/assets/images/brand-logos/vimeo-logo.svg" clickHandler={function(){
                        handleProfileChange("vimeo")
                    }} />
                    <ButtonSquare src="./src/assets/images/brand-logos/html5-logo.svg" clickHandler={function(){
                        handleProfileChange("html5")
                    }} />
                    <ButtonSquare src="./src/assets/images/brand-logos/voicethread-logo.svg" clickHandler={function(){
                        handleProfileChange("voicethread")
                    }} />
                    <ButtonSquare src="./src/assets/images/brand-logos/canvas_by_instructure-logo.svg" clickHandler={function(){
                        handleProfileChange("canvas")
                    }} />
                    <ButtonSquare src="./src/assets/images/icons/settings-outline.svg" clickHandler={function(){
                        handleProfileChange("custom")
                    }} />
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

                    { profile.allow_fullscreen.used && (<OptionsToggle label="Allow fullscreen:" id="allow_fullscreen" active={formProps.allow_fullscreen} clickHandler={handleFormProps_bool}/>) }

                    { profile.turn_off_related_videos.used && (<OptionsToggle label="Turn off related videos:" id="turn_off_related_videos" active={formProps.turn_off_related_videos} clickHandler={handleFormProps_bool}/>) }    

                    { profile.use_modest_branding.used && (<OptionsToggle label="Use modest branding:" id="use_modest_branding" active={formProps.use_modest_branding} clickHandler={handleFormProps_bool}/>) }
                    
                    <OptionsDropdown label="Player maximum size:" id="player_max_size" value={formProps.player_max_size} options={settings.player_width_selction_options} width={formProps.player_max_size_width} height={formProps.player_max_size_height} changeHandler={handleFormProps_string}/>
                    
                    {(profile.allow_accelerometer.used && showMore) && <OptionsToggle label="Allow accelerometer:" id="allow_accelerometer" active={formProps.allow_accelerometer} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_autoplay.used && showMore) && <OptionsToggle label="Allow autoplay:" id="allow_autoplay" active={formProps.allow_autoplay} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_clipboard_write.used && showMore) && <OptionsToggle label="Allow clipboard write:" id="allow_clipboard_write" active={formProps.allow_clipboard_write} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_encrypted_media.used && showMore) && <OptionsToggle label="Allow encrypted media:" id="allow_encrypted_media" active={formProps.allow_encrypted_media} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_gyroscope.used && showMore) && <OptionsToggle label="Allow gyroscope:" id="allow_gyroscope" active={formProps.allow_gyroscope} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_picture_in_picture.used && showMore) && <OptionsToggle label="Allow picture-in-picture:" id="allow_picture_in_picture" active={formProps.allow_picture_in_picture} clickHandler={handleFormProps_bool}/>}

                    {(profile.allow_web_share.used && showMore) && <OptionsToggle label="Allow web share:" id="allow_web_share" active={formProps.allow_web_share} clickHandler={handleFormProps_bool}/>}


                    { (profile.use_custom_properties.used && showMore) && (<OptionsTextInput label="Custom properties:" toggle_id="use_custom_props" input_id="use_custom_props_value" active={formProps.use_custom_props} clickHandler={handleFormProps_bool} value={formProps.use_custom_props_value} changeHandler={handleFormProps_string}/>) }
                    
                    <ButtonSecondary title={showMore ? "Show Less Options" : "Show More Options"} clickHandler={handleShowMore} />
                    <ButtonPrimary title="Generate Embed Code" clickHandler={submitHandler}/>
                </div>
            </CardSection>
        </Card>
        <GeneratedCode inner_text={embedCode.text}/>
        </>
    )
}