"use client"
import { Footer } from "~/app/_components/footer"
import { NavBar } from "~/app/_components/navbar"
import { IoCartOutline } from "react-icons/io5";

export default function Homepage() {
    return (
        <>
            <NavBar></NavBar>
            <main className="min-w-[300px] bg-purple-50">

                <div className="bg-purple-100 w-full h-full"> {/* div de apresentação */}
                    <div className="flex justify-center mb-4 pt-23"> {/* Texto inicial */}
                        <h1 className="text-6xl font-bold">Sua Música, <b className="text-purple-600">Nossa Paixão</b></h1>
                    </div>

                    <div className="flex justify-center mb-8 mt-4 w-full h-full"> {/* Texto de apresentação */}
                        <p className="text-xl  text-gray-600 text-center">
                          Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                          acessórios. Transforme sua piaxão pela música em realidade.</p>
                    </div>

                    <div className="flex justify-center mt-4 pb-18">  {/* botoes */}
                        <li className="flex itens-center max-[600]:p-2 bg-purple-600 border-1 border-gray-200 rounded-lg shadow-md p-3 pr-4 mr-6">
                          <IoCartOutline style={{color: "white", fontSize: "1.5em"}}/>
                            <a className="pl-3 text-white" href="/productPage"> Ver produtos</a>
                        </li>
                        <li className="max-[600]:p-1 bg-white border-1 border-gray-200 rounded-lg p-3 flex items-center shadow-md">
                            <a href="#">Saiba mais</a>
                        </li>
                    </div>
                </div>

                <div className="w-full h-full ">
                    <div className="flex justify-center pb-8 pt-16 font-bold"> {/* Texto inicial */}
                        <h2 className="text-4xl ">Sobre nós</h2>
                    </div>
                    <div className="flex justify-center pb-8"> {/* Texto inicial */}
                        <p className="text-xl text-gray-600">Conheça nossa história e paixão pela música</p>
                    </div>
                </div>

                <div className="p-8 pr-10 flex justify-center">
                    <div className="mb-8"> {/* box 1 */}
                      <h3 className="text-3xl  pb-8 font-bold">
                        Mais de 20 anos dedicados à música
                      </h3>
                      <p className="text-l  text-gray-550 text-justify pb-6">
                        Somos uma empresa familiar apaixona por música. Desde 2004, oferecemos os
                        melhores instrumentos musicais e equipamentos de áudio para músicos profissionais e 
                        amadores.</p>
                      <p className="text-l  text-gray-550 text-justify">
                        Nossa missão é tornar a música acessível a todos, fornecendo produtos de qualidadede
                        com o melhor atendimento e preços justos. Acreditamos que cada pessoas tem um
                        músico dentro de si esperando para ser descoberto.</p>
                    </div>
                    {/* Box roxo */}
                    <div className="flex flex-col mt-8 bg-purple-600 border-1 border-puple-600 rounded-lg p-3 items-center shadow-md"> {/* Texto de apresentação */}
                        <p className="text-l  text-gray-550">
                          Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                          acessórios. Transforme sua piaxão pela música em realidade.</p>
                        <p className="text-l  text-gray-550">
                          Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                          acessórios. Transforme sua piaxão pela música em realidade.</p>
                        <p className="text-l  text-gray-550">
                          Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                          acessórios. Transforme sua piaxão pela música em realidade.</p>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
