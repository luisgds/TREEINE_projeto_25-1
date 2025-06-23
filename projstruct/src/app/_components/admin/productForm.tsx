import { IoClose } from "react-icons/io5";

export function ProductForm({
    onClose
} : {
    onClose: () => void
} ) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-6">
        <div className="border-4 border-gray-200 rounded-md p-4">
            <div className="flex justify-between">
                <h3 className="font-bold text-lg" >Adicionar Novo Produto</h3>
                <button onClick={onClose}><IoClose className="text-2xl"/></button>
            </div>
            <form className="label *:block [&_input]:w-full [&_input]:mb-2">
                <label htmlFor="nome">Nome do Produto</label>
                <input name="nome" id="nome" placeholder="Ex: Piano Yamaha" className="border-2 rounded-sm border-gray-300"></input>
                <label htmlFor="preco">Preço</label>
                <input name="preco" id="preco" placeholder="Ex: R$ 2.500" className="border-2 rounded-sm border-gray-300"></input>
                <label htmlFor="estoque">Estoque</label>
                <input name="estoque" id="estoque" placeholder="Ex: 10" className="border-2 rounded-sm border-gray-300"></input>
                <label htmlFor="categoria">Categoria</label>
                <input name="categoria" id="categoria" placeholder="Ex: Pianos" className="border-2 rounded-sm border-gray-300"></input>
                <div className="text-center">
                    <button className="bg-purple-600 text-white rounded-md w-full p-1">Salvar Produto</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}