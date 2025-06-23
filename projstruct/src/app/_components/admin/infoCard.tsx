import { FaQuestion } from "react-icons/fa";

type InfoCardProps = {
    text?: string,
    data?: string,
    icon?: React.ReactNode
}

export function InfoCard({
    text = "Total Produtos",
    data = "1000",
    icon
}: InfoCardProps) {
    return (
        <div className="bg-white border-1 border-gray-200 rounded-lg p-3 flex items-center">
            <div>
                <h3 className="font-light text-xs">{text}</h3>
                <div className="font-bold">{data}</div>
            </div>
            <div className="m-2 ml-8">
                {icon}
            </div>
        </div>
    )
}