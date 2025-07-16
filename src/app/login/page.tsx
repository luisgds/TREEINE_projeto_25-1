import { Footer } from "../_components/footer";
import { NavBar } from "../_components/navbar";
import { StatCard } from "../_components/login/statcard";
import { PromiseCard } from "../_components/login/promise";
import { IconButton } from "../_components/login/icon_button";
import { LoginCard } from "../_components/login/loginCard";
import Link from "next/link";
import { FaLock, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function LoginPage() {
  return (
    <main className="bg-purple-50 overflow-x-hidden">
      <NavBar></NavBar>
      <div className="px-4 py-20">
        <section className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">
            Entre na sua <span className="text-[#8f068f]">Conta</span>
          </h1>
          <p className="text-gray-500">
            Acesse sua conta para gerenciar seus pedidos e favoritos.
          </p>
        </section>
          <div className="mb-24 flex justify-center">
            <LoginCard />
          </div>
        <section className="mb-24 text-center">
          <h2 className="mb-2 text-3xl font-bold">Explore nossos produtos</h2>
          <p className="mb-6 text-gray-500">
            Descubra nossa coleção completa de instrumentos e equipamentos
            musicais.
          </p>
          <IconButton icon={<FaShoppingCart />} label="Ver Produtos" />
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

            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-stretch lg:justify-start">
              <StatCard title="500+" subtitle="Produtos" />
              <StatCard title="10K+" subtitle="Clientes" />
            </div>
            </div>

            <PromiseCard
              title="Nossa Promessa"
              items={[
                "Qualidade garantida",
                "Atendimento especializado",
                "Preços competitivos",
                "Entrega rápida e segura",
              ]}
            />
        </div>
        </section>
      </div>
      <Footer></Footer>
    </main>
  );
}