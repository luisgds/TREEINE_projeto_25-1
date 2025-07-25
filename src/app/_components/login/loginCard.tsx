"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 text-center shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">Acesse sua conta</h2>
      <p className="mb-8 text-gray-500">
        Sem necessidade de Cadastro!
      </p>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="mx-auto flex items-center justify-center rounded-md bg-white py-3 px-5 font-semibold text-gray-700 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <FaGoogle className="mr-3" />
        Entrar com Google
      </button>
    </div>
  );
}