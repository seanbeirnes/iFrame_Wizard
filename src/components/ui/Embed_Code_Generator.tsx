import Card from "../common/Card/Card"
import Card_Section from "../common/Card/Card_Section/Card_Section"
import Button_Primary from "../common/buttons/Button_Primary/Button_Primary"
import Button_Square from "../common/buttons/Button_Square/Button_Square"

export default function EmbedCodeGen(){
    return (
        <Card title="(Insert Name) Embed Code Generator">
            <Card_Section title="Select a source vendor or choose the gear icon to customize">
                <div className="px-2 flex flex-wrap gap-2">
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                    <Button_Square src="./src/assets/images/brand-logos/youtube-svgrepo-com.svg" />
                </div>
            </Card_Section>
            <Card_Section title="Add the iFrame Source">
                <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
            </Card_Section>
            <Card_Section title="Set options">
                <div className="grid grid-flow-row grid-cols-1 gap-4">
                    <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
                    <Button_Primary title="Generate Embed Code"/>
                </div>
            </Card_Section>
        </Card>
    )
}