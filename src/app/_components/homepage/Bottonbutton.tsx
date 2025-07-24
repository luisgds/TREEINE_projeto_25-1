import { IoCartOutline } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";

export function Bottonbutton() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 w-full bg-purple-200 px-6 py-12 pt-30 e pb-30">
            <li className="flex items-center bg-purple-600 rounded-lg shadow-md px-5 py-3 hover:bg-purple-700 transition text-white">
                <IoCartOutline className="text-xl" />
                <a className="pl-3" href="/productPage">Ver produtos</a>
            </li>
            <li className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-5 py-3 hover:bg-gray-100 transition text-gray-700">
                <AiOutlineLogin className="text-xl" />
                <a className="pl-3" href="/login">Fazer login</a>
            </li>
        </div>
    );
}