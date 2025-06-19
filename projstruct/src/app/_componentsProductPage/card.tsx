import styles from "~/productPageStyles/card.module.css"


export function Card(){
    return (
        <div className={styles.Card}>

            <div className={styles.ImageContainer}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg5C0xgdL5UyagnEPC26Pz4B4Uyi9xjCr7Q&s" alt="" />
            </div>

            <div className={styles.TextContainer}>
                <strong><h1> Nome do produto</h1></strong>
                <h1 className={styles.HeaderPreco}> R$ Preco do produto</h1>

                <button className={styles.BotaoComprar}>Botao de compra</button>
            </div>

        </div>
    );
}