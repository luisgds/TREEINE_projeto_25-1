import { StatCard } from "./statcard";
import { PromiseCard } from "./promise";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl text-center">
      <h2 className="text-2xl font-bold">Sobre Nós</h2>
      <p className="mb-12 text-gray-500">
        Mais de 20 anos dedicados à música
      </p>

      <div className="flex flex-col justify-center gap-12 lg:flex-row lg:items-stretch">
        <div className="flex flex-shrink-0 flex-col justify-between gap-8 text-left lg:w-1/2">
          <p className="text-[18px] leading-[1.6] text-gray-600 max-w-lg mb-1">
            Somos uma empresa familiar apaixonada por música. Desde 2004,
            oferecemos os melhores instrumentos musicais e equipamentos de áudio
            com qualidade garantida e preços justos.
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
  );
}
