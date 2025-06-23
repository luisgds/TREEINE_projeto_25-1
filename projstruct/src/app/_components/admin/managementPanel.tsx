"use client";
import { Table } from "~/app/_components/admin/table"
import { FaPlus } from "react-icons/fa6";
import { ProductForm } from "./productForm";
import { useState } from "react";




export function ManagementPanel({nome}: {nome: string}) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="border-2 rounded-md border-gray-200 bg-white m-4 shadow-lg">
            <div className="flex justify-between m-2 text-lg p-2">
                <h2 className="font-bold">{nome}</h2>
                <button onClick={() => setShowForm(true)} className="bg-purple-500 text-white rounded-sm pl-2 pr-2 p-1 text-sm flex items-center justify-evenly shadow-sm"><FaPlus className="mr-2" />Adicionar Produto</button>
            </div>
            <div className="flex justify-center">
                <Table nome={nome}></Table>
            </div>
            {showForm && <ProductForm onClose={() => setShowForm(false)} />}
        </div>
    )
}