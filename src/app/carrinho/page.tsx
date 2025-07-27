"use client"
import { NavBar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import { Carrinho } from "../_components/carrinho/containerCarrinho";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CarrinhoPage() {

  const {data:session} = useSession();

  if(!session || !session.user){
    return redirect("/login");
  }

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