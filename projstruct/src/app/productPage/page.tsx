import Link from "next/link";
import {Card} from "../_componentsProductPage/card"
import { NavBar } from "../_components/navbar";
import { Footer } from "../_components/footer";
import {ProductRow} from "../_componentsProductPage/productRow"
import { PageContainer } from "../_componentsProductPage/pagecontainer";
import { PrimeiroTexto } from "../_componentsProductPage/primeirotext";
import { SegundoTexto } from "../_componentsProductPage/segundotexto";





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
