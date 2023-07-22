
type Props = {
    text: string;
    className: string;
}

export default function TimedText({text, className}: Props){

    return (
        <p className={className + " text-disappear"}>{text}</p>
    )
}