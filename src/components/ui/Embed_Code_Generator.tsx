import Card from "../common/Card/Card"
import Card_Section from "../common/Card/Card_Section/Card_Section"
import Button_Primary from "../common/buttons/Button_Primary/Button_Primary"
import Button_Square from "../common/buttons/Button_Square/Button_Square"
import Options_Toggle from "../common/options/Options_Toggle.tsx"
import Options_Dropdown from "../common/options/Options_Dropdown.tsx"
import Options_Text from "../common/options/Options_Text.tsx"

export default function EmbedCodeGen(){
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
                    <input className="p-1 w-full border-2 border-gray-200 rounded-md shadow-inner focus:border-sky-400 outline-2 outline-sky-400 text-sm text-gray-500" type="text" name="add-url" id="add-url" placeholder="Paste or type in source URL (or ID for videos)"/>
                </div>
            </Card_Section>
            <Card_Section title="Set options">
                <div className="px-2 grid grid-flow-row grid-cols-1 gap-2">
                    <Options_Toggle label="Testing name here"/>
                    <Options_Toggle label="Testing name here"/>
                    <Options_Dropdown label="Testing name here" />
                    <Options_Text label="Testing name here" />
                    <Button_Primary title="Generate Embed Code"/>
                </div>
            </Card_Section>
        </Card>
    )
}