import {Card} from "./card"
import styles from "~/productPageStyles/productrow.module.css"


export function ProductRow(){
    return(
        <div className={styles.ProductRow}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}