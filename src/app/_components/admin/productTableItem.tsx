"use client"
import { FaRegPenToSquare } from "react-icons/fa6";
import { ProductForm } from "./productForm";
import { useState } from "react";

type ProductTableItemProps = {
    id: number;
    nome?: string,
    preco?: number,
    descricao?: string
}

export function ProductTableItem({
    id = 0,
    nome = "Nome Teste",
    preco = 0,
    descricao = "descricao teste"
}: ProductTableItemProps) {
    const [showForm, setShowForm] = useState(false);

    return (
        <tr className="border-t-1 border-t-gray-300 text-left hover:bg-gray-50">
            <th scope="row" className="pt-2 pb-2 font-semibold">{nome}</th>
            <td className="pt-2 pb-2">{preco}</td>
            <td className="pt-2 pb-2">{descricao}</td>
            <td className="pt-2 pb-2 text-center"><button onClick={() => {setShowForm(true)}} className="border-2 rounded-md border-gray-200 bg-white p-2 pl-3 pr-3"><FaRegPenToSquare /></button></td>
            {/* TODO: tirar esse form daqui para evitar erro */}
            {showForm && <ProductForm onClose={() => setShowForm(false)} isCreate={false} id={id} initialNome={nome} initialPreco={preco} initialDescricao={descricao}/>}
        </tr>
    )
}