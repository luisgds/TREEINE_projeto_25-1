import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type PageToGoProps = {
    rota: string;
    texto: string;
};

export function PageToGo({ rota, texto}: PageToGoProps) {
  return (
    <Link href= {rota} className="inline-flex items-center text-gray-600 hover:text-purple-600">
      <FaArrowLeft className="mr-2" />
      {texto}
    </Link>
  );
}