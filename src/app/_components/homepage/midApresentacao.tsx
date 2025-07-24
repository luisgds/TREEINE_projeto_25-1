import { IoCartOutline } from "react-icons/io5";

export function MidApresentacao() {
    return(
        <>
        <div className="flex flex-wrap w-full">
            <div className="w-full h-full ">  {/* Apresentação detalhada 2º div */}

                <section className="flex justify-center pb-8 pt-16 font-bold"> {/* Texto inicial */}
                    <h2 className="text-4xl ">
                        Sobre nós
                    </h2>
                </section>

                <section className="flex justify-center pb-8"> {/* Texto inicial */}
                    <p className="text-xl text-gray-600">
                        Conheça nossa história e paixão pela música
                    </p>
                </section>

            </div>
            <div className="p-8 flex flex-col md:flex-row items-center">
                <section className="min-w-64 m-auto justify-evenly flex flex-col p-8  w-6/10 "> {/* box apresentação detalhes  */}
                    <h3 className="text-3xl  pb-8 font-bold">
                        Mais de 20 anos dedicados à música
                    </h3>
                    <p className="text-l  text-gray-550 text-justify pb-6">
                        Somos uma empresa familiar apaixona por música. Desde 2004, oferecemos os
                        melhores instrumentos musicais e equipamentos de áudio para músicos profissionais e 
                        amadores.
                    </p>
                    <p className="text-l  text-gray-550 text-justify pb-6">
                        Nossa missão é tornar a música acessível a todos, fornecendo produtos de qualidadede
                        com o melhor atendimento e preços justos. Acreditamos que cada pessoas tem um
                        músico dentro de si esperando para ser descoberto.
                    </p>
                </section>
                {/* Box roxo */}
                {/* items-center w-4/10 md:justify-center justify-evenly flex flex-col */}
                <section className="w-2/3 md:w-1/3 shadow shadow-slate-500 rounded-2xl justify-center align-middle flex bg-gradient-to-br from-purple-400 to-blue-500">
                    <div className="text-white p-8 ">
                        <h3 className="font-medium text-lg mb-4"> Nossa Promessa:</h3>
                        <ul className="float-left list-disc">
                            <li>Qualidade garantida</li>
                            <li>Atendimento especializado</li>
                            <li>Preços competitivos</li>
                            <li>Entrega rápida</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}

