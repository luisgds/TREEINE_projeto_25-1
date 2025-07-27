import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
// Exporta a configuração de autenticação usada pelo NextAuth
export const authConfig = {
  /**
   * Lista de provedores de autenticação.
   * Aqui o usuário pode fazer login com Discord ou Google.
   */
  providers: [
    DiscordProvider,
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // ID do app no Google Cloud Console
      clientSecret: process.env.GOOGLE_CLIENT_SECRET // Chave secreta do app no Google
    })
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  /**
   * Define o adapter do Prisma para que o NextAuth salve sessões, usuários, contas, etc. no banco.
   * Isso é necessário para persistência de dados.
   */

  adapter: PrismaAdapter(db),

  /**
   * Callbacks personalizados para modificar os dados de sessão ou token.
   * 
   * Esse callback `session` é executado quando a sessão é criada.
   * Ele adiciona o `id` do usuário no objeto de `session.user`,
   * o que é útil para consultar o usuário autenticado no frontend.
   */
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  // Faz com que o objeto esteja conforme o tipo NextAuthConfig (validação TypeScript)
} satisfies NextAuthConfig;
