import { api } from "~/trpc/react";
import { UserTableItem } from "./userTableItem"
import { procedureTypes } from "@trpc/server/unstable-core-do-not-import";

export function UserTable({nome}: {nome: string}) {
    const {data: users, isLoading, error} = api.user.getAll.useQuery()

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar: {error.message}</div>;
    }
    
    if (!users || users.length === 0) {
        return <div>Nenhum usuário.</div>;
    }

    return (
        <table className="w-95/100">
            <thead>
                <tr className="text-gray-500 text-left font-semibold">
                    <th scope="col" className="w-3/10 pb-2">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Imagem</th>
                    <th scope="col" className="text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <UserTableItem key={user.id} data={user}></UserTableItem>
                })}
            </tbody>
        </table>
    );
}