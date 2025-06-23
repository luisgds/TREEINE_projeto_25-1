import { ProductTableItem } from "./productTableItem"

export function Table({nome}: {nome: string}) {
    return (
        <table className="w-95/100">
            <thead>
                <tr className="text-gray-500 text-left font-semibold">
                    <th scope="col" className="w-3/10 pb-2">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Estoque</th>
                    <th scope="col">Categoria</th>
                    <th scope="col" className="text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                <ProductTableItem nome="Piano" preco="10 reais"></ProductTableItem>
                <ProductTableItem nome="Piano" preco="10 reais"></ProductTableItem>
                <ProductTableItem nome="Piano" preco="10 reais"></ProductTableItem>
            </tbody>
        </table>
    );
}