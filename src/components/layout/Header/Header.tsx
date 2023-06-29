
type Props = {
    children?: React.ReactNode;
}

export default function Header({children}: Props){
    return (
        <header className="p-2 bg-white shadow-md">
            {children}
        </header>
    )
}