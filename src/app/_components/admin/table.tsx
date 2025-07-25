import { api } from "~/trpc/react";
import { ProductTableItem } from "./productTableItem"
import { procedureTypes } from "@trpc/server/unstable-core-do-not-import";

export function Table({nome}: {nome: string}) {
    const {data: products, isLoading, error} = api.products.getAllProducts.useQuery()

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar: {error.message}</div>;
    }
    
    if (!products || products.length === 0) {
        return <div>Nenhum produto.</div>;
    }

    return (
        <table className="w-95/100">
            <thead>
                <tr className="text-gray-500 text-left font-semibold">
                    <th scope="col" className="w-3/10 pb-2">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Descrição</th>
                    <th scope="col" className="text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <ProductTableItem key={product.id} nome={product.nome} preco={product.preco} descricao={product.descricao}></ProductTableItem>
                })}
            </tbody>
        </table>
    );
}