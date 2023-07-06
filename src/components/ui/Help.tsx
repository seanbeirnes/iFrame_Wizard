import {Card} from "../common/cards"
import {CardSection} from "../common/cards"

export default function Help(){
    return (
    <Card title="Help">
        <CardSection title="About">
            <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
        </CardSection>
        <CardSection title="Directions">
            <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
        </CardSection>
    </Card>

    )
}