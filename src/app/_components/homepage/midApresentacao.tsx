import { IoCartOutline } from "react-icons/io5";

export function MidApresentacao() {
    return (
        <div className="flex flex-col w-full bg-white px-6 py-16">
            
            {/* Título e subtítulo */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Sobre nós</h2>
                <p className="text-xl text-gray-600">Conheça nossa história e paixão pela música</p>
            </div>

            {/* Conteúdo principal: texto + box roxo */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-8">

                {/* Texto detalhado */}
                <section className="w-full md:w-2/3 max-w-3xl p-6">
                    <h3 className="text-3xl font-bold pb-6">Mais de 20 anos dedicados à música</h3>
                    <p className="text-lg text-gray-600 text-justify pb-4">
                        Somos uma empresa familiar apaixonada por música. Desde 2004, oferecemos os
                        melhores instrumentos musicais e equipamentos de áudio para músicos profissionais e 
                        amadores.
                    </p>
                    <p className="text-lg text-gray-600 text-justify">
                        Nossa missão é tornar a música acessível a todos, fornecendo produtos de qualidade
                        com o melhor atendimento e preços justos. Acreditamos que cada pessoa tem um
                        músico dentro de si esperando para ser descoberto.
                    </p>
                </section>

                {/* Box roxo com promessas */}
                <section className="w-full md:w-1/3 bg-gradient-to-br from-purple-400 to-blue-500 text-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-semibold text-lg mb-4">Nossa Promessa:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Qualidade garantida</li>
                        <li>Atendimento especializado</li>
                        <li>Preços competitivos</li>
                        <li>Entrega rápida</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

