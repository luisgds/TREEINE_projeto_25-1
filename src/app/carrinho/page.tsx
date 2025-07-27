import { NavBar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import { Carrinho } from "../_components/carrinho/containerCarrinho";

export default function CarrinhoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow mb-16">
        <Carrinho />
      </main>
      <Footer />
    </div>
  );
}