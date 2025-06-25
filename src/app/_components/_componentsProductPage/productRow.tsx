import {Card} from "./card"
import styles from "~/productPageStyles/productrow.module.css"


export function ProductRow(){
    return(
        <div className="w-4/5 flex justify-center items-center m-auto max-[1024px]:flex-col flex-wrap max-[600]:grid max-[600]:justify-center">
            <Card nome="teste" preco={124}></Card>
            <Card nome="teste" preco={90}></Card>
            <Card nome="teste" preco={699}></Card>
            <Card nome="teste" preco={699}></Card>
            <Card nome="teste" preco={699}></Card>
            <Card nome="teste" preco={699}></Card>
            <Card nome="teste" preco={699}></Card>

        </div>
    );
}