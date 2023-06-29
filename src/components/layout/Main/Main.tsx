import Help from "../../ui/Help.tsx";
import EmbedCodeGen from "../../ui/Embed_Code_Generator.tsx";
import GeneratedCode from "../../ui/Generated_Code.tsx";

export default function Main(){
    return (
        <main className="container mx-auto max-w-screen-lg p-2">

        <Help/>

        <EmbedCodeGen/>

        <GeneratedCode/>

      </main>
    )
}