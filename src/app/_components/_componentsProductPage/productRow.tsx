import {Card} from "./card"
import styles from "~/productPageStyles/productrow.module.css"
import { api } from "~/trpc/server";


export async function ProductRow(){


    const productList = await api.products.getAllProducts()
    const prod = await api.products.deleteProduct(3)

    return(
        <div className="w-4/5 flex justify-center items-center m-auto max-[1024px]:flex-col flex-wrap max-[600]:grid max-[600]:justify-center">
            
        {productList.map((product) => {
            return( <Card key={product.id} nome={product.nome} preco={product.preco} ></Card> )
        })}


        </div>
    );
}