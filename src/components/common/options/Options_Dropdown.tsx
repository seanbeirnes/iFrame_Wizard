import Options_Wrapper from "./Options_Wrapper";

type Props = {
    label?: string;
}

export default function Options_Dropdown({ label }: Props){
    return (
        <Options_Wrapper>
            <>
                <span className="text-sm text-gray-700">{label}</span>
                <div className="text-sm">Dropdown</div>
            </>
        </Options_Wrapper>
    )
}