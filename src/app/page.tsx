"use client"
import { Footer } from "~/app/_components/footer"
import { NavBar } from "~/app/_components/navbar"
import { Bottonbutton } from "~/app/_components/homepage/Bottonbutton"
import { Topintroducao } from "~/app/_components/homepage/topintroducao"
import { MidApresentacao } from "~/app/_components/homepage/midApresentacao"

export default function Homepage() {
    return (
        <>
            <NavBar></NavBar>
            <main className="m-auto w-10/10 bg-purple-50">
                <Topintroducao></Topintroducao>
                <MidApresentacao></MidApresentacao>
                <Bottonbutton></Bottonbutton>
            </main>
            <Footer></Footer>
        </>
    )
}
