"use client"

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { api } from "~/trpc/react";

type UserFormProps = {
    onClose: () => void,
    isCreate: boolean,
    data?: {
        name: string | null,
        id: string,
        email: string | null,
        emailVerified: Date | null,
        image: string | null
        role: string
}
}

export function UserForm({
    onClose, 
    isCreate,
    data={name:"", id:"", email:"", emailVerified:null, image:"", role:""}
} : UserFormProps) {
    const [name, setName] = useState(data["name"] ?? "");
    const [email, setEmail] = useState(data["email"] ?? "");
    const [role, setRole] = useState(data["role"] ?? "");

    const utils = api.useUtils();

    if (isCreate) {
        console.error("Não pode-se criar usuários manualmente");
    }
    const request = api.user.update.useMutation({
        onSuccess: (data) => {
            utils.user.getAll.invalidate();
    },  
        onError: (error) => {
    }})

    const del = api.user.delete.useMutation({
        onSuccess: (data) => {
            utils.user.getAll.invalidate();
        },
        onError: (error) => {

        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        request.mutate({id:data["id"], name, email, role});

        e.preventDefault();
    }

    const handleDelete = (e: React.MouseEvent) => {
        if (data["id"] == undefined) {
            return
        }
        del.mutate(data["id"]);
    }

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div onClick={e => e.stopPropagation()} className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
        <div className="border-4 border-gray-200 rounded-md p-4">
            <div className="flex justify-between">
                <h3 className="font-bold text-lg" >{isCreate && "Adicionar novo "}{!isCreate && "Editar "}usuário</h3>
                <button onClick={onClose}><IoClose className="text-2xl"/></button>
            </div>
            <form onSubmit={handleSubmit} className="label *:block [&_input]:w-full [&_input]:mb-2 [&_input]:border-2 [&_input]:rounded-sm [&_input]:border-gray-300 [&_input]:p-0.5">
                <label htmlFor="name">Nome do Usuário</label>
                <input name="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Ex: João"></input>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="exemple@gmail.com"></input>
                <label htmlFor="role">Role</label>
                <input name="role" id="role" value={role} onChange={(e) => {setRole(e.target.value)}} type="url" placeholder="admin"></input>
                <div className="text-center">
                    <button className="bg-green-500 text-white rounded-md w-full p-1">Salvar usuário</button>
                </div>
            </form>
            {!isCreate && <button onClick={handleDelete} className="bg-red-700 text-white rounded-md w-full p-1 mt-1">Deletar usuário</button>}
        </div>
        </div>
        </div>
    )
}