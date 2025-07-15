import { IoCartOutline } from "react-icons/io5";

export function Topintroducao() {
    return(
            <div className="bg-purple-100 w-full h-full"> {/* div de apresentação */}
                <section className="flex justify-center mb-4 pt-23"> {/* Texto inicial */}
                    <h1 className="text-6xl font-bold">
                        Sua Música, <b className="text-purple-600">
                        Nossa Paixão
                    </b></h1>
                </section>

                <div className="flex justify-center mb-8 mt-4 w-full h-full"> {/* Texto de apresentação */}
                    <p className="text-xl  text-gray-600 text-center">
                        Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                        acessórios. Transforme sua piaxão pela música em realidade.</p>
                </div>

                <section className="flex justify-center mt-4 pb-18">  {/* botoes */}
                    <li className="flex itens-center max-[600]:p-2 bg-purple-600 border-1 border-gray-200 rounded-lg shadow-md p-3 pr-4 mr-6">
                        <IoCartOutline style={{color: "white", fontSize: "1.5em"}}/>
                        <a className="pl-3 text-white" href="/productPage"> Ver produtos</a>
                    </li>
                    <li className="max-[600]:p-1 bg-white border-1 border-gray-200 rounded-lg p-3 flex items-center shadow-md">
                        <a href="#">Saiba mais</a>
                    </li>
                </section>
            </div>
    );
}
