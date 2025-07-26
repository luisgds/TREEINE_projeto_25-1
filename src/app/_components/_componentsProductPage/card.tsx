"use client"
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export function Card({nome, preco, id}:{id:number ,nome:string, preco:number}){
    const {data:session} = useSession()
    const mutation = api.cart.create.useMutation()

    const handleCompra = () =>{

        console.log("valor do id:",id )
        if(!session || !session.user){
            redirect("/login");
        }

        mutation.mutate({user_id:session.user.id, quantity:1, product_id:id})
        
    }

    return (
        <div className="m-4 border-2 border-solid border-black rounded-xl w-72 table flex-col p-4 max-h-80 max-[1024]:m-4">
            <p></p>
            <div className="w-9/10 m-auto object-contain h-40">
                <img className="w-10/10 rounded h-10/10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg5C0xgdL5UyagnEPC26Pz4B4Uyi9xjCr7Q&s" alt="" />
            </div>

            <div className="h-5/10 pt-4">
                <strong><h1> {nome}</h1></strong>
                <h1 className="pb-4 text-[#8f068f]"> R$ {preco}</h1>

                <button onClick={() => handleCompra()} className="bg-[#8f068f] p-2 text-white text-center rounded w-9/10">Comprar</button>
            </div>

        </div>
    );
}