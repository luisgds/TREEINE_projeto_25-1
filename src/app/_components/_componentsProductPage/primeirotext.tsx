
import styles from "~/productPageStyles/textcontainer.module.css"
import { api } from "~/trpc/server";

export function PrimeiroTexto(){

    return(
        <div className="m-auto flex flex-col text-center p-12">
            <h1 className="text-2xl font-medium"> Nossos produtos</h1>
            <p className="w-8/10 m-auto mb-4 text-gray-500">Descubra nossa seleção cuidadosamente escolhida de instrumentos musicais e 
                equipamento de áudio
            </p>
        </div>
    );
}