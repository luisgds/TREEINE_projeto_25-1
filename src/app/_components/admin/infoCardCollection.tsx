"use client"
import { BsBoxSeam } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { InfoCard } from "~/app/_components/admin/infoCard"
import { IoCartOutline } from "react-icons/io5";

import { api } from "~/trpc/react";

export function InfoCardCollection({
}) {
    const {data:userCount} = api.user.countUsers.useQuery();
    const {data:productCount} = api.products.count.useQuery();

    return (
        <div className="flex justify-between m-8">
            <InfoCard text="Total Produtos" data={String(productCount ?? 0)} icon={<BsBoxSeam style={{color: "blue", fontSize: "1.5em"}} />}></InfoCard>
            <InfoCard text="Clientes" data={String(userCount ?? 0)} icon={<GoPeople style={{color: "green", fontSize: "1.5em"}}/>}></InfoCard>
            <InfoCard text="Vendas Hoje" data="R$ 4,890" icon={<FaChartBar style={{color: "purple", fontSize: "1.5em"}}/>}></InfoCard>
            <InfoCard text="Pedidos" data="23" icon={<IoCartOutline style={{color: "orange", fontSize: "1.5em"}}/>}></InfoCard>
        </div>
    )
}