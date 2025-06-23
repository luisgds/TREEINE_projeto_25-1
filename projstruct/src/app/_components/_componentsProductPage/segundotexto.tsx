
import styles from "~/productPageStyles/textcontainer.module.css"

export function SegundoTexto(){
    return(
        <div className="m-auto flex flex-col text-center p-12">
            <h2 className="text-2xl font-normal">Sobre nós</h2>
            <p className="w-8/10 m-auto mb-4 text-gray-600">Mais de 20 anos dedicados à música</p>
            <div className="mt-8 bg-gray-100 rounded-2xl m-auto flex w-7/10 max-[1024]:flex max-[1024]:flex-col max-[1024]:flex-wrap max-[1024]:items-center">
                <p className="w-4/10 p-8 pt-16 max-[1024]:w-10/10">Somos uma empresa familiar apaixonada por música. Desde 2004, oferecemos
                    os melhores instrumentos musicais e equipamento de áudio em Brasília.
                </p>
                <div className="justify-evenly flex flex-col m-8 p-8 items-center w-4/10 text-white rounded-md bg-[#8f068f] h-8/10 max-[1024]:w-8/10">
                    <h3 className="font-medium text-lg mb-4"> Nossa Promessa:</h3>
                    <ul className="float-left list-disc">
                        <li>Qualidade garantida</li>
                        <li>Atendimento especializado</li>
                        <li>Preços competitivos</li>
                        <li>Entrega rápida</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}