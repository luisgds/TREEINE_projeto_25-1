
import styles from "~/productPageStyles/textcontainer.module.css"


export function PrimeiroTexto(){
    return(
        <div className={styles.Container}>
            <h1 className={styles.Header1}> Nossos produtos</h1>
            <p className={styles.Paragraph}>Descubra nossa seleção cuidadosamente escolhida de instrumentos musicais e 
                equipamento de áudio
            </p>
        </div>
    );
}