import Card from "../common/Card/Card"
import Card_Section from "../common/Card/Card_Section/Card_Section"

export default function Help(){
    return (
    <Card title="Help">
        <Card_Section title="About">
            <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
        </Card_Section>
        <Card_Section title="Directions">
            <p className="text-xs text-gray-700" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, laboriosam.</p>
        </Card_Section>
    </Card>

    )
}