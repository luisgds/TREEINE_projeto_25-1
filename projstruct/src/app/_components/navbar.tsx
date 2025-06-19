import styles from "~/styles/navbar.module.css"
import { AiOutlineLogin } from "react-icons/ai";
import { IoMusicalNotes } from "react-icons/io5";

export  function NavBar(){

    return(
        <nav className={styles.NavBar}>
            <div className={styles.NavLeft}>
              <i><IoMusicalNotes /></i>  <a className={styles.MainPageLink} href="#"> MusicStore </a>
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
                   <i><AiOutlineLogin/></i><button>Login</button>
                </div>
            </div>
        </nav>
    );

}