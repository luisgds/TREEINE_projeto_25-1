
import styles from "~/productPageStyles/textcontainer.module.css"

export function SegundoTexto(){
    return(
        <div className={styles.Container}>
            <h2 className={styles.Header2}>Sobre nós</h2>
            <p className={styles.Paragraph}>Mais de 20 anos dedicados à música</p>
            <div className={styles.Container_horizontal}>
                <p className={styles.Paragraph_1}>Somos uma empresa familiar apaixonada por música. Desde 2004, oferecemos
                    os melhores instrumentos musicais e equipamento de áudio em Brasília.
                </p>
                <div className={styles.ListContainer}>
                    <h3> Nossa Promessa:</h3>
                    <ul>
                        <li>Qualidade garantida</li>
                        <li>Atendimento especializado</li>
                        <li>Preços competitivos</li>
                        <li>Entrega rápida</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}