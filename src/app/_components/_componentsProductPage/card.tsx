"use client";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Card({nome, preco, image_url, id}:{nome:string, preco:number, image_url:string, id:number}){

  const { data: session } = useSession();
  const router = useRouter();
  const utils = api.useUtils();

    // Integrando ao Carrinho 
  const mutation = api.cart.addItem.useMutation({
    onSuccess: () => {
      utils.cart.getCartItems.invalidate(); // avisa ao front da mudança no estado do bd
      alert(`${nome} foi adicionado ao carrinho!`);
    },
    onError: (error) => {
      alert(`Erro ao adicionar o produto: ${error.message}`);
    },
  });

  const handleCompra = () => {
    if (!session || !session.user) {
      router.push("/login");
      return;
    }
    mutation.mutate({ productId: id });
  };

    return (
        <div className="m-4 border-2 border-solid border-black rounded-xl w-72 table flex-col p-4 max-h-80 max-[1024]:m-4">
            <p></p>
            <div className="w-9/10 m-auto object-contain h-40">
                <img className="w-10/10 rounded h-10/10" src={image_url} alt="" />
            </div>

            <div className="h-5/10 pt-4">
                <strong><h1> {nome}</h1></strong>
                <h1 className="pb-4 text-[#8f068f]"> R$ {preco}</h1>

                <button onClick={() => handleCompra()} className="bg-[#8f068f] p-2 text-white text-center rounded w-9/10">Comprar</button>
            </div>

        </div>
    );
}