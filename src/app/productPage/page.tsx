import Link from "next/link";
import {Card} from "../_components/_componentsProductPage/card"
import { NavBar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import {ProductRow} from "../_components/_componentsProductPage/productRow"
import { PageContainer } from "../_components/_componentsProductPage/pagecontainer";
import { PrimeiroTexto } from "../_components/_componentsProductPage/primeirotext";
import { SegundoTexto } from "../_components/_componentsProductPage/segundotexto";
import { api } from "~/trpc/server";




export default function HomePage() {


  return (
    <main>
        <NavBar></NavBar>
        <PageContainer>
            <PrimeiroTexto></PrimeiroTexto>
            <ProductRow></ProductRow>
            <SegundoTexto></SegundoTexto>
            <Footer></Footer>
        </PageContainer>
    </main>
  );
}
