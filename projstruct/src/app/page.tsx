import Link from "next/link";
import {Card} from "./_components/_componentsProductPage/card"
import { NavBar } from "./_components/navbar";

export default function HomePage() {
  return (
    <main>
      <div className="w-100vh h-100vh bg-blue-400 mx-auto flex max-w-sm">
        <h1> Bem vindos</h1>
        
        <Card/>
      </div>
    </main>
  );
}