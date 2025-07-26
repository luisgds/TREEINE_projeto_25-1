import styles from "~/productPageStyles/card.module.css"


export function Card({nome, preco, image_url}:{nome:string, preco:number, image_url:string}){


    return (
        <div className="m-4 border-2 border-solid border-black rounded-xl w-72 table flex-col p-4 max-h-80 max-[1024]:m-4">

            <div className="w-9/10 m-auto object-contain h-40">
                <img className="w-10/10 rounded h-10/10" src={image_url} alt="" />
            </div>

            <div className="h-5/10 pt-4">
                <strong><h1> {nome}</h1></strong>
                <h1 className="pb-4 text-[#8f068f]"> R$ {preco}</h1>

                <button className="bg-[#8f068f] p-2 text-white text-center rounded w-9/10">Botao de compra</button>
            </div>

        </div>
    );
}