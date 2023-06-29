type Props = {
    title?: string;
    children?: React.ReactNode;
}

export default function Card({ title, children }: Props){
    return (
        <section className="shadow-md rounded-md m-2 mb-4">
            <div className="bg-sky-800 rounded-t-md p-2">
                <h2 className="text-base font-medium text-gray-50 text-center">{title}</h2>
            </div>
            {children}
        </section>
    )
}