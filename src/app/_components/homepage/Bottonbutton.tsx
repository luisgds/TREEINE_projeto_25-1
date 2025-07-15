import { IoCartOutline } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";

export function Bottonbutton(){
    return(
        <div className="flex justify-center p-32 w-full bg-purple-200">  {/* botoes inferiores*/}
            <li className="flex itens-center max-[600]:p-2 bg-purple-600 border-1 border-gray-200 rounded-lg shadow-md p-3 pr-4 mr-6">
                <IoCartOutline style={{color: "white", fontSize: "1.5em"}}/>
                <a className="pl-3 text-white" href="/productPage"> Ver produtos</a>
            </li>
            <li className="max-[600]:p-1 bg-white border-1 border-gray-200 rounded-lg p-3 flex items-center shadow-md">
                <i className="max-[500]:hidden m-auto pr-2"><AiOutlineLogin/></i>
                <a href="/login">Fazer login</a>
            </li>
        </div>
    );
}