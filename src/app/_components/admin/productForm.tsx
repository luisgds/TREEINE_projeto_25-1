"use client"

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { api } from "~/trpc/react";

type ProductFormProps = {
    onClose: () => void,
    isCreate: boolean,
    id?: number | undefined,
    initialNome?: string,
    initialPreco?: number,
    initialDescricao?: string
}

export function ProductForm({
    onClose, 
    isCreate,
    id=undefined,
    initialNome="",
    initialPreco=0,
    initialDescricao=""
} : ProductFormProps) {
    const [nome, setNome] = useState(initialNome);
    const [preco, setPreco] = useState(initialPreco);
    const [descricao, setDescricao] = useState(initialDescricao);

    const request = isCreate ? 
    api.products.createProduct.useMutation({ 
        onSuccess: (data) => {
            alert("Produto criado");
    },  
        onError: (error) => {
    }}) : 
    api.products.updateProduct.useMutation({
        onSuccess: (data) => {
            alert("Produto atualizado");
    },  
        onError: (error) => {
    }})

    const handleSubmit = (e: React.FormEvent) => {
        request.mutate({nome, preco, descricao, id});

        e.preventDefault();
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
        <div className="border-4 border-gray-200 rounded-md p-4">
            <div className="flex justify-between">
                <h3 className="font-bold text-lg" >{isCreate && "Adicionar novo "}{!isCreate && "Editar "}produto</h3>
                <button onClick={onClose}><IoClose className="text-2xl"/></button>
            </div>
            <form onSubmit={handleSubmit} className="label *:block [&_input]:w-full [&_input]:mb-2">
                <label htmlFor="nome">Nome do Produto</label>
                <input name="nome" id="nome" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Ex: Piano Yamaha" className="border-2 rounded-sm border-gray-300"></input>
                <label htmlFor="preco">Preço</label>
                <input name="preco" id="preco" value={preco} onChange={(e) => {setPreco(Number(e.target.value))}} type="number" placeholder="Ex: R$ 2.500" className="border-2 rounded-sm border-gray-300"></input>
                <label htmlFor="descricao">Descrição</label>
                <input name="descricao" id="descricao" value={descricao} onChange={(e) => {setDescricao(e.target.value)}} placeholder="Ex: Piano tradicional preto" className="border-2 rounded-sm border-gray-300"></input>
                <div className="text-center">
                    <button className="bg-purple-600 text-white rounded-md w-full p-1">Salvar Produto</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}