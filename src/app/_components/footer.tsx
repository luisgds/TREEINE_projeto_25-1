import styles from "~/styles/footer.module.css"
import { GiMusicSpell } from "react-icons/gi";

export function Footer(){
    return(
        <footer className="bg-black h-40">
            <i><GiMusicSpell className="text-white m-auto pt-4 text-7xl"/></i>
        </footer>
    );
}