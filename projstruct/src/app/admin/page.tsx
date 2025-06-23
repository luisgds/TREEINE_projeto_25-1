import { Footer } from "~/app/_components/footer"
import { NavBar } from "~/app/_components/navbar"
import { ManagementPanel } from "../_components/admin/managementPanel"
import { InfoCard } from "../_components/admin/infoCard"
import { FaQuestion } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FaChartBar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function AdminPage() {
    return (
        <>
            <NavBar></NavBar>
            <main className="bg-purple-50 pt-5 pb-5">
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold">Painel <b className="text-purple-600">Administrativo</b></h1>
                </div>
                <div className="flex justify-between m-4">
                    <InfoCard text="Total Produtos" data="156" icon={<BsBoxSeam style={{color: "blue", fontSize: "1.5em"}} />}></InfoCard>
                    <InfoCard text="Clientes" data="2,340" icon={<GoPeople style={{color: "green", fontSize: "1.5em"}}/>}></InfoCard>
                    <InfoCard text="Vendas Hoje" data="R$ 4,890" icon={<FaChartBar style={{color: "purple", fontSize: "1.5em"}}/>}></InfoCard>
                    <InfoCard text="Pedidos" data="23" icon={<IoCartOutline style={{color: "orange", fontSize: "1.5em"}}/>}></InfoCard>
                </div>
                <ManagementPanel nome="Gestão de produtos"></ManagementPanel>
                <ManagementPanel nome="Gestão de Usuários"></ManagementPanel>
            </main>
            <Footer></Footer>
        </>
    )
}