"use client"
import { FaRegPenToSquare } from "react-icons/fa6";
import { ProductForm } from "./productForm";
import { useState } from "react";
import { createPortal } from "react-dom";

type ProductTableItemProps = {
    data: {
        nome: string | null,
        id: number | undefined,
        preco: number | null,
        descricao: string | null,
        imageUrl: string | null
    }
}

export function ProductTableItem({
    data
}: ProductTableItemProps) {
    const [showForm, setShowForm] = useState(false);

    return (
        <tr className="border-t-1 border-t-gray-300 text-left hover:bg-gray-50">
            <th scope="row" className="pt-2 pb-2 font-semibold">{data["nome"]}</th>
            <td className="pt-2 pb-2">{data["preco"]}</td>
            <td className="pt-2 pb-2">{data["descricao"]}</td>
            <td className="pt-2 pb-2"><img src={data["imageUrl"] ?? undefined} className="max-w-24 p-2"></img></td>
            <td className="pt-2 pb-2 text-center"><button onClick={() => {setShowForm(true)}} className="border-2 rounded-md border-gray-200 bg-white p-2 pl-3 pr-3"><FaRegPenToSquare /></button></td>
            {createPortal(showForm && <ProductForm onClose={() => setShowForm(false)} isCreate={false} data={data}/>, document.body)}
        </tr>
    )
}