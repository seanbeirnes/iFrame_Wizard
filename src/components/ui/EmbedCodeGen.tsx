import * as settings from "../../data/settings.json"
import * as templates from "../../data/templates.json"
import * as profilesJOSN from "../../data/embed_profiles.json"
import { ChangeEvent, useState, useEffect } from "react"
import {Card, CardSection} from "../common/cards/index.tsx"
import {ButtonPrimary, ButtonSecondary, ButtonSquare} from "../common/buttons/index.tsx"
import { OptionsTextInput, OptionsToggle, OptionsDropdown } from "../common/options/index.tsx"
import GeneratedCode from "./Generated_Code.tsx"
import { FormPropsData, ProfileSettingsData } from "../../types/types.ts"
import modelsRouter from "../../models/modelsRouter.ts"

const profiles: ProfileSettingsData = profilesJOSN

export default function EmbedCodeGen(){

    const [useProfile, setUseProfile] = useState("youtube")

    let profile = profiles[useProfile]

    function handleProfileChange(newProfile: string){
        setUseProfile(newProfile)
    }

    const [showMore, setShowMore] = useState(false)

    function handleShowMore(){
        setShowMore(!showMore)
    }

    const [formProps, setFormProps] = useState<FormPropsData>({
        name: profile.name,
        allow_accelerometer: profile.allow_accelerometer.active,
        allow_autoplay: profile.allow_autoplay.active,
        allow_camera: profile.allow_camera.active,
        allow_camera_text: "",
        allow_clipboard_write: profile.allow_clipboard_write.active,
        allow_encrypted_media: profile.allow_encrypted_media.active,
        allow_gyroscope: profile.allow_gyroscope.active,
        allow_microphone: profile.allow_microphone.active,
        allow_microphone_text: "",
        allow_picture_in_picture: profile.allow_picture_in_picture.active,
        allow_web_share: profile.allow_web_share.active,
        allow_fullscreen: profile.allow_fullscreen.active,
        allow_fullscreen_text: "",
        player_max_size: "default",
        player_max_size_width: "560",
        player_max_size_height: "315",
        use_modest_branding: profile.use_modest_branding.active,
        turn_off_related_videos: profile.use_modest_branding.active,
        use_custom_props: profile.use_custom_properties.active,
        use_custom_props_text: "",
        url: "",
    });

    useEffect( () => {
        setFormProps(
            {
                name: profile.name,
                allow_accelerometer: profile.allow_accelerometer.active,
                allow_autoplay: profile.allow_autoplay.active,
                allow_camera: profile.allow_camera.active,
                allow_camera_text: "",
                allow_clipboard_write: profile.allow_clipboard_write.active,
                allow_encrypted_media: profile.allow_encrypted_media.active,
                allow_gyroscope: profile.allow_gyroscope.active,
                allow_microphone: profile.allow_microphone.active,
                allow_microphone_text: "",
                allow_picture_in_picture: profile.allow_picture_in_picture.active,
                allow_web_share: profile.allow_web_share.active,
                allow_fullscreen: profile.allow_fullscreen.active,
                allow_fullscreen_text: "",
                player_max_size: "default",
                player_max_size_width: "560",
                player_max_size_height: "315",
                use_modest_branding: profile.use_modest_branding.active,
                turn_off_related_videos: profile.use_modest_branding.active,
                use_custom_props: profile.use_custom_properties.active,
                use_custom_props_text: "",
                url: "",
            }
        )
    }, [useProfile])

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


    function makeOptionsToggle(component){
        const label = component.label
        const id = component.id
        const show_more = component.show_more
    
        return (
            show_more ? showMore && <OptionsToggle label={label} id={id} active={formProps[id]} clickHandler={handleFormProps_bool}/> : <OptionsToggle label={label} id={id} active={formProps[id]} clickHandler={handleFormProps_bool}/>
        )
    }

    function makeOptionsTextInput(component){
        const label = component.label
        const id = component.id
        const place_holder = component.place_holder
        const show_more = component.show_more

        return(
            show_more ?  showMore && <OptionsTextInput label={label} toggle_id={id} input_id={id + "_text"} active={formProps[id]} clickHandler={handleFormProps_bool} value={formProps[id + "_text"]} place_holder={place_holder} changeHandler={handleFormProps_string}/> : <OptionsTextInput label={label} toggle_id={id} input_id={id + "_text"} active={formProps[id]} clickHandler={handleFormProps_bool} value={formProps[id + "_text"]} place_holder={place_holder} changeHandler={handleFormProps_string}/>
        )
    }

    function makeOptionsComponent(component){

        const type = component.type

        switch (type) {

            case "OptionsToggle":
                return makeOptionsToggle(component)
            
            case "OptionsTextInput":
                return makeOptionsTextInput(component)

            default:
                return (<></>)
        }
    }
    
    function makeOptionsComponenets(){
        const template = templates.youtube
        const componenets = []
        for(const i in template.componenets){
            componenets.push( makeOptionsComponent( template.componenets[i] ) )
        }
        return (
            <>
            {componenets}
            </>
        )
    }



    const [embedCode, setEmbedCode] = useState<{
        [index: string]: string
        text: string
    }>({text:""})

    function submitHandler(){
        const embedCodeResponse = modelsRouter(formProps)
        if(embedCodeResponse.succeeded){
            setEmbedCode({text: embedCodeResponse.text})
        }else{
            alert(embedCodeResponse.message)
        } 
    }

    return (
        <>
        <Card title={`Embed Code Generator [${profile.name.toUpperCase()} TEMPLATE]`}>
            <CardSection title="Select a template or choose the gear icon to customize">
                <div className="px-2 flex flex-wrap gap-2">
                    <ButtonSquare src="./src/assets/images/brand-logos/youtube-logo.svg" clickHandler={function(){
                        handleProfileChange("youtube")
                    }} />
                    {/* <ButtonSquare src="./src/assets/images/brand-logos/vimeo-logo.svg" clickHandler={function(){
                        handleProfileChange("vimeo")
                    }} /> */}
                    {/* <ButtonSquare src="./src/assets/images/brand-logos/html5-logo.svg" clickHandler={function(){
                        handleProfileChange("html5")
                    }} /> */}
                    <ButtonSquare src="./src/assets/images/brand-logos/voicethread-logo.svg" clickHandler={function(){
                        handleProfileChange("voicethread")
                    }} />
                    {/* <ButtonSquare src="./src/assets/images/brand-logos/canvas_by_instructure-logo.svg" clickHandler={function(){
                        handleProfileChange("canvas")
                    }} /> */}
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
                    
                    <OptionsDropdown label="Player maximum size:" id="player_max_size" value={formProps.player_max_size} options={settings.player_width_selction_options} width={formProps.player_max_size_width} height={formProps.player_max_size_height} changeHandler={handleFormProps_string}/>   

                    {makeOptionsComponenets()}
                    
                    <ButtonSecondary title={showMore ? "Show Less Options" : "Show More Options"} clickHandler={handleShowMore} />
                    <ButtonPrimary title="Generate Embed Code" clickHandler={submitHandler}/>
                </div>
            </CardSection>
        </Card>
        <GeneratedCode inner_text={embedCode.text}/>
        </>
    )
}