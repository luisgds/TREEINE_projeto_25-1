import { IconButton } from "./icon_button";
import { FaShoppingCart } from "react-icons/fa";

export function ExploreSection() {
  return (
    <section className="mb-24 text-center">
      <h2 className="mb-2 text-3xl font-bold">Explore nossos produtos</h2>
      <p className="mb-6 text-gray-500">
        Descubra nossa coleção completa de instrumentos e equipamentos musicais.
      </p>
      <IconButton icon={<FaShoppingCart />} label="Ver Produtos" />
    </section>
  );
}
