import {Card} from "../common/cards"
import {CardSection} from "../common/cards"

export default function Help(){
    return (
    <Card title="Help">
        <CardSection title="About">
            <p className="text-xs text-gray-700" >iFrame Wizard is an application that creates responsive iframe embed code for your webpages. Default embed code from many sources such as YouTube will not grow and shrink with different screen sizes in real time. Using iFrame Wizard, you can quickly and easily embed various media sources in a responsive iframe.</p>
        </CardSection>
        <CardSection title="Directions">
            <ol className="mx-4 mb-2 text-xs text-gray-700 list-decimal" >
                <li>Copy and paste the source link into the space provided. For YouTube, you can also use only the ID.</li>
                <li>Set the options you would like. You can also select <strong>Show More Options</strong> to see some advanced settings.</li>
                <li>Select <strong>Generate Embed Code</strong> and the code will appear in the "Generated Code" area below. It will also be automatically copied to your clipboard.</li>
            </ol>
            <p className="text-xs text-gray-700"><strong>Tip:</strong> If you get stuck, click on the reset button (arrow in a circle) in the top right corner.</p>
        </CardSection>
    </Card>

    )
}