"use client"
import { Footer } from "~/app/_components/footer"
import { NavBar } from "~/app/_components/navbar"
import { IoCartOutline } from "react-icons/io5";

export default function Homepage() {
    return (
        <>
            <NavBar></NavBar>
            <main className="bg-purple-50">

                <div className="bg-purple-100 w-full "> {/* div de apresentação */}
                    <div className="flex justify-center mb-4 pt-23"> {/* Texto inicial */}
                        <h1 className="text-5xl font-bold">Sua Música, <b className="text-purple-600">Nossa Paixão</b></h1>
                    </div>

                    <div className="flex justify-center mb-8 mt-4"> {/* Texto de apresentação */}
                        <b className="text-l font-bold text-gray-600">
                          Descubra os melhores instrumentos musicais, equipamentos de áudio e 
                          acessórios. Transforme sua piaxão pela música em realidade.</b>
                    </div>

                    <div className="flex justify-center mt-4 pb-18">  {/* botoes */}
                        <li className="flex itens-center max-[600]:p-2 bg-purple-600 border-1 border-gray-200 rounded-lg shadow-md p-3">
                          <IoCartOutline style={{color: "white", fontSize: "1.5em"}}/>
                            <a className="pl-3 text-white" href="/productPage"> Ver produtos</a>
                        </li>
                        <li className="max-[600]:p-1 bg-white border-1 border-gray-200 rounded-lg p-3 flex items-center shadow-md">
                            <a href="#">Saiba mais</a>
                        </li>
                    </div>
                </div>

                <div className="flex justify-center bg-purple-600">
                    <div className="w-full max-w-5xl">
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
