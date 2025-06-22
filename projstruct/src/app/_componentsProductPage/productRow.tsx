import {Card} from "./card"
import styles from "~/productPageStyles/productrow.module.css"


export function ProductRow(){
    return(
        <div className="w-4/5 flex justify-evenly m-auto">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}