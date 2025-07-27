"use client"

import styles from "~/styles/navbar.module.css"
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMusicalNotes } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col border-b border-gray-400 md:flex-row md:items-center md:justify-between md:h-12">
      {/* Topo */}
      <div className="flex items-center justify-between px-4 py-2 md:p-0">
        <div className="flex items-center font-bold underline text-[#8f068f]">
          <IoMusicalNotes className="text-lg" />
          <a className="ml-2 hidden max-[500px]:hidden md:block" href="#">
            MusicStore
          </a>
        </div>

        {/* Botão sanduíche visível em telas pequenas */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col items-center gap-2 pb-4 px-6 md:flex md:flex-row md:items-center md:justify-between md:pb-0`}
      >
        <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
          <li>
            <Link href="/" className="hover:text-[#8f068f]">Início</Link>
          </li>
          <li>
            <Link href="/loginPage" className="hover:text-[#8f068f]">Sobre nós</Link>
          </li>
          <li>
            <Link href="/productPage" className="hover:text-[#8f068f]">Produtos</Link>
          </li>
          <li>
            <Link href="/carrinho" className="hover:text-[#8f068f]">Carrinho</Link>
          </li>
        </ul>

        <div className="mt-2 flex items-center gap-2 border-2 border-black rounded px-3 py-1 md:mt-0 md:ml-4">
          <AiOutlineLogin className="hidden max-[500px]:hidden md:block" />
          <button onClick={() => signIn("google")}>Login</button>
        </div>
      </div>
    </nav>
  );
}