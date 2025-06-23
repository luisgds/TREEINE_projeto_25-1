import styles from "~/styles/navbar.module.css"
import { AiOutlineLogin } from "react-icons/ai";
import { IoMusicalNotes } from "react-icons/io5";

export  function NavBar(){

    return(
        <nav className="flex justify-between items-center border-b-1 border-solid border-gray-400 h-12 max-[600]:justify-around">
            <div className="flex pl-6 flex-row font-bold underline max-[600]:p-0">
              <i  className="m-auto text-[#8f068f]"><IoMusicalNotes/></i>  <a className="ml-2" href="#"> MusicStore </a>
            </div>
            <div className="flex justify-between items-center">
                <ul>
                    <li className="inline-block pr-8 max-[600]:p-1">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="inline-block pr-8 max-[600]:p-1">
                        <a href="#">Sobre nós</a>
                    </li>
                    <li className="inline-block pr-8 max-[600]:p-1">
                        <a href="#">Produtos</a>
                    </li>
                </ul>   
                <div className="flex flex-row flex-wrap border-solid border-black border-2 rounded mr-8 p-2 h-10/10">
                   <i className="m-auto"><AiOutlineLogin/></i><button>Login</button>
                </div>
            </div>
        </nav>
    );

}