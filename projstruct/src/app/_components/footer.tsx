import styles from "~/styles/footer.module.css"
import { GiMusicSpell } from "react-icons/gi";

export function Footer(){
    return(
        <footer className={styles.Footer}>
            <i><GiMusicSpell className={styles.MusicIcon}/></i>
        </footer>
    );
}