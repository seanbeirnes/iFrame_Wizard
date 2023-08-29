import * as settings from "../../data/settings.json"
import * as templatesJSON from "../../data/templates.json"
import { ChangeEvent, useState, useEffect} from "react"
import {Card, CardSection} from "../common/cards/index.tsx"
import {ButtonPrimary, ButtonSecondary, ButtonSquare} from "../common/buttons/index.tsx"
import { OptionsTextInput, OptionsToggle, OptionsDropdown } from "../common/options/index.tsx"
import GeneratedCode from "../ui/Generated_Code.tsx"
import { TemplatesData, Template, TemplateComponent, FormPropsData } from "../../types/types.ts"
import modelsRouter from "../../models/modelsRouter.ts"

const templates: TemplatesData = templatesJSON

export default function EmbedCodeGen(){

    const [useProfile, setUseProfile] = useState("youtube")

    let template = templates[useProfile]

    function handleProfileChange(newProfile: string){
        setUseProfile(newProfile)
    }

    const [showMore, setShowMore] = useState(false)

    function handleShowMore(){
        setShowMore(!showMore)
    }

    function findComponentByID(template: Template, id: string){
        for(const i in template.componenets){
            const component = template.componenets[i]
            if(id === component.id){
                return component
            }
        }
        return null;
    }

    function isComponentActive(template: Template, id: string){
        const component = findComponentByID(template, id)
        return component ? component.active : false;
    }

    function getDefaultFormProps(url: string){
        return ({
            id: template.id,
            allow_accelerometer: isComponentActive(template, "allow_accelerometer"),
            allow_autoplay: isComponentActive(template, "allow_autoplay"),
            allow_camera: isComponentActive(template, "allow_camera"),
            allow_camera_text: "",
            allow_clipboard_write: isComponentActive(template, "allow_clipboard_write"),
            allow_encrypted_media: isComponentActive(template, "allow_encrypted_media"),
            allow_gyroscope: isComponentActive(template, "allow_gyroscope"),
            allow_microphone: isComponentActive(template, "allow_microphone"),
            allow_microphone_text: "",
            allow_picture_in_picture: isComponentActive(template, "allow_picture_in_picture"),
            allow_web_share: isComponentActive(template, "allow_web_share"),
            allow_fullscreen:isComponentActive(template, "allow_fullscreen"),
            allow_fullscreen_text: "",
            player_max_size: "default",
            player_max_size_width: "560",
            player_max_size_height: "315",
            use_modest_branding: isComponentActive(template, "use_modest_branding"),
            use_enhanced_privacy: isComponentActive(template, "use_enhanced_privacy"),
            turn_off_related_videos: isComponentActive(template, "turn_off_related_videos"),
            use_custom_props: isComponentActive(template, "use_custom_props"),
            use_custom_props_text: "",
            url: url ? url : ""
        })
    }

    const [formProps, setFormProps] = useState<FormPropsData>(
        getDefaultFormProps("")
    );

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


    function makeOptionsToggle(component: TemplateComponent){
        const label = component.label
        const id = component.id
        const show_more = component.show_more
    
        return (
            show_more ? showMore && <OptionsToggle label={label} id={id} key={id} active={formProps[id] as boolean} clickHandler={handleFormProps_bool}/> : <OptionsToggle label={label} id={id} key={id} active={formProps[id] as boolean} clickHandler={handleFormProps_bool}/>
        )
    }

    function makeOptionsTextInput(component: TemplateComponent){
        const label = component.label
        const id = component.id
        const place_holder = component.place_holder
        const show_more = component.show_more

        return(
            show_more ?  showMore && <OptionsTextInput label={label} toggle_id={id} input_id={id + "_text"} key={id} active={formProps[id] as boolean} clickHandler={handleFormProps_bool} value={formProps[id + "_text"] as string} place_holder={place_holder} changeHandler={handleFormProps_string}/> : <OptionsTextInput label={label} toggle_id={id} input_id={id + "_text"} key={id} active={formProps[id] as boolean} clickHandler={handleFormProps_bool} value={formProps[id + "_text"] as string} place_holder={place_holder} changeHandler={handleFormProps_string}/>
        )
    }

    function makeOptionsComponent(component: TemplateComponent){

        const type= component.type

        switch (type) {

            case "OptionsToggle":
                return makeOptionsToggle(component)
            
            case "OptionsTextInput":
                return makeOptionsTextInput(component)

            default:
                return (<></>)
        }
    }
    
    function makeOptionsComponenets(template: Template){
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

    useEffect( () => {
        setFormProps( getDefaultFormProps(formProps.url) )
    }, [useProfile])

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

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key == "Enter"){
            submitHandler()
        }
    }

    return (
        <>      
            <Card title={`Embed Code Generator [${template.name} Template]`}>

                <CardSection title="Select a template or choose the gear icon to customize">
                    <div className="px-2 flex flex-wrap gap-2">
                        <ButtonSquare src="images/brand-logos/youtube-logo.svg" bkg="bg-gray-100" clickHandler={function(){
                            handleProfileChange("youtube")}}
                            active={template.id=="youtube"} />
                        {/* <ButtonSquare src="images/brand-logos/vimeo-logo.svg" clickHandler={function(){
                            handleProfileChange("vimeo")
                        }} /> */}
                        {/* <ButtonSquare src="images/brand-logos/html5-logo.svg" clickHandler={function(){
                            handleProfileChange("html5")
                        }} /> */}
                        <ButtonSquare src="images/brand-logos/voicethread-logo.svg" bkg="bg-gray-100" clickHandler={function(){
                            handleProfileChange("voicethread")}} 
                            active={template.id=="voicethread"} />
                        {/* <ButtonSquare src="images/brand-logos/canvas_by_instructure-logo.svg" clickHandler={function(){
                            handleProfileChange("canvas")
                        }} /> */}
                        <ButtonSquare src="images/icons/settings-outline.svg" bkg="bg-gray-100" clickHandler={function(){
                            handleProfileChange("custom")}}
                            active={template.id=="custom"} />
                    </div>
                </CardSection>

                <CardSection title="Add the iFrame Source">
                    <div className="px-2">
                        <label htmlFor="add-url"></label>
                        <input className="p-1 w-full border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-sm text-gray-500" type="text" id="url" name="add-url" placeholder="Paste or type in source URL (or ID for videos)" value={formProps.url} onChange={handleFormProps_string} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {handleKeyPress(e)}}/>
                    </div>
                </CardSection>

                <CardSection title="Set options">
                    <div className="px-2 grid grid-flow-row grid-cols-1 gap-2">
                        
                        <OptionsDropdown label="Player maximum size:" id="player_max_size" value={formProps.player_max_size} options={settings.player_width_selction_options} width={formProps.player_max_size_width} height={formProps.player_max_size_height} changeHandler={handleFormProps_string}/>   

                        {makeOptionsComponenets(template)}
                        
                        <ButtonSecondary title={showMore ? "Show Less Options" : "Show More Options"} clickHandler={handleShowMore} />

                        <ButtonPrimary title="Generate Embed Code" clickHandler={submitHandler}/>
                    </div>
                </CardSection>

            </Card>

            <GeneratedCode inner_text={embedCode.text}/>

        </>
    )
}