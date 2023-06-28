type Props = {
    children?: React.ReactNode;
}

export default function Card({ children }: Props){
    return (
        <section className="shadow-md rounded-md m-2 mb-4">
            {children}
        </section>
    )
}