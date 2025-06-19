import Link from "next/link";
import {Card} from "../_componentsProductPage/card"
import { NavBar } from "../_components/navbar";

export default function HomePage() {
  return (
    <main>
        <NavBar></NavBar>
        <Card></Card>
    </main>
  );
}
