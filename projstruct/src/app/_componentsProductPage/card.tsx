import styles from "~/productPageStyles/card.module.css"


export function Card(){
    return (
        <div className="border-2 border-solid border-black rounded-xl w-72 table flex-col p-4 max-h-80">

            <div className="w-9/10 m-auto object-contain h-40">
                <img className="w-10/10 rounded h-10/10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg5C0xgdL5UyagnEPC26Pz4B4Uyi9xjCr7Q&s" alt="" />
            </div>

            <div className="h-5/10 pt-4">
                <strong><h1> Nome do produto</h1></strong>
                <h1 className="pb-4 text-pink-800"> R$ Preco do produto</h1>

                <button className="bg-pink-950 p-4 text-white text-center rounded w-9/10">Botao de compra</button>
            </div>

        </div>
    );
}