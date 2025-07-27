// Importa a função principal do NextAuth para configurar a autenticação
import NextAuth from "next-auth";

// Importa a função 'cache' do React, que memoriza o resultado de uma função assíncrona
import { cache } from "react";

// Importa a configuração de autenticação definida em um arquivo separado
import { authConfig } from "./config";

// Inicializa o NextAuth com a configuração fornecida
// Decompõe o retorno em:
// - auth: função para recuperar a sessão do usuário
// - handlers: handlers HTTP (GET/POST) usados nas rotas de autenticação
// - signIn: função para iniciar o login
// - signOut: função para fazer logout
const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth(authConfig);

// Aplica caching à função 'auth' usando React Cache para evitar chamadas repetidas
const auth = cache(uncachedAuth);

// Exporta os objetos e funções relevantes para serem usados em outras partes da aplicação
export { auth, handlers, signIn, signOut };
