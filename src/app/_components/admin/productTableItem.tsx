import { FaRegPenToSquare } from "react-icons/fa6";

type ProductTableItemProps = {
    nome?: string,
    preco?: string,
    descricao?: string
}

export function ProductTableItem({
    nome = "Nome Teste",
    preco = "Preço Teste",
    descricao = "descricao teste"
}: ProductTableItemProps) {
    return (
        <tr className="border-t-1 border-t-gray-300 text-left hover:bg-gray-50">
            <th scope="row" className="pt-2 pb-2 font-semibold">{nome}</th>
            <td className="pt-2 pb-2">{preco}</td>
            <td className="pt-2 pb-2">{descricao}</td>
            <td className="pt-2 pb-2 text-center"><button className="border-2 rounded-md border-gray-200 bg-white p-2 pl-3 pr-3"><FaRegPenToSquare /></button></td>
        </tr>
    )
}