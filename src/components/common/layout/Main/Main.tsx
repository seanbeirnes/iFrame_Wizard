type Props = {
  children?: React.ReactNode;
}

export default function Main({children}: Props){
    return (
      <main className="container mx-auto max-w-screen-md p-2">
        {children}
      </main>
    )
}