import { Footer } from "../_components/footer";
import { NavBar } from "../_components/navbar";
import Link from "next/link";
import { FaLock, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function LoginPage() {
  return (
    <main className="bg-purple-50">
      <NavBar />
      <div className="px-4 py-20">
        <section className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">
            Entre na sua <span className="text-[#8f068f]">Conta</span>
          </h1>
          <p className="text-gray-500">
            Acesse sua conta para gerenciar seus pedidos e favoritos.
          </p>
        </section>

        <section className="mb-24 flex justify-center">
          <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 flex items-center justify-center text-2xl font-semibold">
              <FaRegUser className="mr-2 text-gray-500" /> Login
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MdOutlineMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-2 border-gray-300 p-2.5 pl-10 focus:border-black focus:ring-0"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-md border-2 border-gray-300 p-2.5 pl-10 focus:border-black focus:ring-0"
                    placeholder="*****"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full justify-center rounded-md border border-transparent bg-[#8f068f] py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Entrar
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500">
              Não tem conta?{" "}
              <Link
                href="#"
                className="font-medium text-[#8f068f] hover:text-purple-800"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </section>

        <section className="mb-24 text-center">
          <h2 className="mb-2 text-3xl font-bold">Explore nossos produtos</h2>
          <p className="mb-6 text-gray-500">
            Descubra nossa coleção completa de instrumentos e equipamentos
            musicais.
          </p>
          <button className="mx-auto flex items-center rounded-md bg-[#8f068f] py-3 px-5 font-semibold text-white hover:bg-purple-800">
            <FaShoppingCart className="mr-2" /> Ver Produtos
          </button>
        </section>

        <section className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold">Sobre Nós</h2>
        <p className="mb-12 text-gray-500">
            Mais de 20 anos dedicados à música
        </p>

        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:items-stretch">
 
            <div className="flex flex-shrink-0 flex-col justify-between gap-8 text-left lg:w-1/2">
            
            <p className="text-[18px] leading-[1.6] text-gray-600 max-w-lg justify-center mb-1">
                Somos uma empresa familiar apaixonada por música. Desde 2004,
                oferecemos os melhores instrumentos musicais e equipamentos de
                áudio com qualidade garantida e preços justos.
            </p>

            <div className="flex justify-center gap-4 lg:justify-start">
                <div className="rounded-lg border border-gray-200 bg-white px-20 py-2 text-center">
                <p className="text-3xl font-bold text-[#8f068f]">500+</p>
                <p className="text-gray-500">Produtos</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white px-20 py-2 text-center">
                <p className="text-3xl font-bold text-[#8f068f]">10k+</p>
                <p className="text-gray-500">Clientes</p>
                </div>
            </div>
            </div>

            <div className="flex w-full flex-col justify-center rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-8 text-left text-white lg:w-1/2">
            <h3 className="mb-4 text-2xl font-bold">Nossa Promessa</h3>
            <ul className="space-y-3">
                <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-white/50"></span>
                Qualidade garantida
                </li>
                <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-white/50"></span>
                Atendimento especializado
                </li>
                <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-white/50"></span>
                Preços competitivos
                </li>
                <li className="flex items-center">
                <span className="mr-3 h-2 w-2 rounded-full bg-white/50"></span>
                Entrega rápida e segura
                </li>
            </ul>
            </div>
        </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}