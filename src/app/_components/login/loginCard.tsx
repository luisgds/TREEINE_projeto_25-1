import { FaLock, FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";


export function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 flex items-center justify-center text-2xl font-semibold">
        <FaRegUser className="mr-2 text-gray-500" /> Login
      </h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MdOutlineMail className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-2 border-gray-300 p-2.5 pl-10 focus:border-black focus:ring-0"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-2 border-gray-300 p-2.5 pl-10 focus:border-black focus:ring-0"
              placeholder="*****"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full justify-center rounded-md border border-transparent bg-[#8f068f] py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Entrar
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Não tem conta?{" "}
        <Link href="#" className="font-medium text-[#8f068f] hover:text-purple-800">
          Criar conta
        </Link>
      </p>
    </div>
  );
}
