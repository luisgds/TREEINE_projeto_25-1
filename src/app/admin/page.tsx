import { Footer } from "~/app/_components/footer"
import { NavBar } from "~/app/_components/navbar"
import { ProductManagementPanel } from "../_components/admin/productManagementPanel"
import { UserManagementPanel } from "../_components/admin/userManagementPanel";
import { InfoCardCollection } from "../_components/admin/infoCardCollection";



export default function AdminPage() {
    return (
        <>
            <NavBar></NavBar>
            <main className="bg-purple-50 pt-5 pb-5">
                <div className="flex justify-center mb-16 mt-16">
                    <h1 className="text-5xl font-bold">Painel <b className="text-purple-600">Administrativo</b></h1>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <InfoCardCollection></InfoCardCollection>
                        <ProductManagementPanel nome="Gestão de produtos"></ProductManagementPanel>
                        <UserManagementPanel nome="Gestão de Usuários"></UserManagementPanel>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}