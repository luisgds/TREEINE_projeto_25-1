"use client"
import { FaRegPenToSquare } from "react-icons/fa6";
import { UserForm } from "./userForm";
import { useState } from "react";
import { createPortal } from "react-dom";

type UserTableItemProps = {
    data: {
        name: string | null,
        id: string,
        email: string | null,
        emailVerified: Date | null,
        image: string | null,
        role: string
    }
}

export function UserTableItem({
    data
}: UserTableItemProps) {
    const [showForm, setShowForm] = useState(false);

    return (
        <tr className="border-t-1 border-t-gray-300 text-left hover:bg-gray-50">
            <th scope="row" className="pt-2 pb-2 font-semibold">{data["name"]}</th>
            <td className="pt-2 pb-2">{data["email"]}</td>
            <td className="pt-2 pb-2">{data["role"]}</td>
            <td className="pt-2 pb-2 text-center"><button onClick={() => {setShowForm(true)}} className="border-2 rounded-md border-gray-200 bg-white p-2 pl-3 pr-3"><FaRegPenToSquare /></button></td>
            {createPortal(showForm && <UserForm onClose={() => setShowForm(false)} isCreate={false} data={data}/>, document.body)}
        </tr>
    )
}