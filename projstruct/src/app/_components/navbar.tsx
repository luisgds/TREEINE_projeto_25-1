import styles from "~/styles/navbar.module.css"
import { VscAccount } from "react-icons/vsc";

export  function NavBar(){

    return(
        <nav className={styles.NavBar}>
            <div className={styles.NavLeft}>
                <a className={styles.MainPageLink} href="#"> MusicStore </a>
            </div>
            <div className={styles.NavRight}>
                <ul className={styles.NavLinks}>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#">Produtos</a>
                    </li>
                </ul>   
                <div className={styles.LoginButton}>
                    <button>Login</button>
                </div>
            </div>
        </nav>
    );

}