"use client"

import { error } from "console";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { api } from "~/trpc/react";

type ProductFormProps = {
    onClose: () => void,
    isCreate: boolean,
    data?: {
        nome: string | null,
        id: number | undefined,
        preco: number | null,
        descricao: string | null,
        imageUrl: string | null
    }
}

export function ProductForm({
    onClose, 
    isCreate,
    data={nome:null, id:0, preco:0, descricao:"", imageUrl:""}
} : ProductFormProps) {
    const [nome, setNome] = useState(data["nome"] ?? "");
    const [preco, setPreco] = useState(data["preco"] ?? 0);
    const [descricao, setDescricao] = useState(data["descricao"] ?? "");
    const [imageFile, setImageFile] = useState<File | null>(null);

    const utils = api.useUtils();

    const request = isCreate ? 
    api.products.createProduct.useMutation({ 
        onSuccess: (data) => {
            utils.products.getAllProducts.invalidate();
    },  
        onError: (error) => {
    }}) : 
    api.products.updateProduct.useMutation({
        onSuccess: (data) => {
            utils.products.getAllProducts.invalidate();
    },  
        onError: (error) => {
    }})

    const del = api.products.deleteProduct.useMutation({
        onSuccess: (data) => {
            utils.products.getAllProducts.invalidate();
        },
        onError: (error) => {

        }
    })

    const uploadImage = api.products.uploadImage.useMutation({
        onSuccess: (data) => {

        },
        onError: (error) => {
            console.error(error.message);
        }
    })

    const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
    });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let imageUrl = "";
        if (imageFile) {
            const base64 = await fileToBase64(imageFile);
            const uploadResult = await uploadImage.mutateAsync({ file: base64 });
            imageUrl = uploadResult.url;
        }

        request.mutate({nome, preco, descricao, id:data["id"], imageUrl});
    }

    const handleDelete = (e: React.MouseEvent) => {
        if (data["id"] == undefined) {
            return
        }
        del.mutate(data["id"]);
    }

    return (
        <div onMouseDown={onClose} className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div onMouseDown={e => e.stopPropagation()} className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
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
                <label htmlFor="imagem">Imagem</label>
                <input name="imagem" id="imagem" type="file" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}></input>
                <div className="text-center">
                    <button className="bg-purple-600 text-white rounded-md w-full p-1">Salvar Produto</button>
                </div>
            </form>
            {!isCreate && <button onClick={handleDelete} className="bg-red-700 text-white rounded-md w-full p-1 mt-1">Deletar Produto</button>}
        </div>
        </div>
        </div>
    )
}