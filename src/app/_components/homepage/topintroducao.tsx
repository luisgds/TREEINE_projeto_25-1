import { IoCartOutline } from "react-icons/io5";

export function Topintroducao() {
    return (
        <div className="flex flex-col items-center bg-purple-100 w-full px-6 py-12 md:py-24"> {/* Container principal */}
            
            {/* Texto principal */}
            <section className="w-full max-w-4xl text-center mb-6 px-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Sua Música, <b className="text-purple-600">Nossa Paixão</b>
                </h1>
            </section>

            {/* Parágrafo de apresentação */}
            <section className="w-full max-w-2xl text-center mb-8 px-4">
                <p className="text-lg md:text-xl text-gray-600">
                    Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                    acessórios. Transforme sua paixão pela música em realidade.
                </p>
            </section>

            {/* Botões */}
            <section className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md px-4">
                <li className="list-none flex items-center justify-center bg-purple-600 text-white rounded-lg shadow-md px-5 py-3 hover:bg-purple-700 transition">
                    <IoCartOutline className="text-xl" />
                    <a className="pl-3" href="/productPage">Ver produtos</a>
                </li>
                <li className="list-none flex items-center justify-center bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md px-5 py-3 hover:bg-gray-100 transition">
                    <a href="#">Saiba mais</a>
                </li>
            </section>

        </div>
    );
}