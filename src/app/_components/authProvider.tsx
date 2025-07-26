"use client"

import { SessionProvider } from "next-auth/react";

import React from "react";

/**
 * Componente de contexto de autenticação.
 *
 * Envolve os componentes filhos com o `SessionProvider` do `next-auth`,
 * permitindo acesso à sessão do usuário autenticado via `useSession()`.
 *
 * @param {React.ReactNode} children - Componentes filhos que terão acesso à sessão.
 *
 * @example
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 */


export function AuthProvider({children}:{children:React.ReactNode}){

    return(

        <SessionProvider>
            {children}
        </SessionProvider>

    )

}