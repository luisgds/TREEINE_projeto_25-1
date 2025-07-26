import { z } from "zod"; // Importa o Zod para validação de dados

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc"; // Importa helpers do tRPC para criar rotas e definir se são públicas ou protegidas

/**
 * Representação do modelo User no Prisma:
 * 
 * model User {
 *   id            String    @id @default(cuid())
 *   name          String?
 *   email         String?   @unique
 *   emailVerified DateTime?
 *   image         String?
 *   accounts      Account[]   // <- Relacionamentos
 *   sessions      Session[]   // <- Relacionamentos
 *   carts         ShopCart[]  // <- Relacionamentos
 * }
 */

// Schema de validação para o User, baseado no model do Prisma
// Schema feito com base na model acima. TODO: falta adicionar os fields relacionais
const userSchema = z.object({
  id: z.string().optional(),            // opcional para criação, necessário para update
  name: z.string().optional(),          // nome é opcional
  email: z.string().optional(),         // email é opcional (mas deve ser único no banco)
  emailVerified: z.date().optional(),  // data de verificação de email, também opcional
  image: z.string().optional(),        // URL da imagem de perfil, se houver
});

export const userRouter = createTRPCRouter({
/**
   * Rota: GET /api/trpc/user.getAll
   * Descrição: Retorna todos os usuários cadastrados no banco
   * Acesso: Público
*/
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            const users = await ctx.db.user.findMany();
            return users;
        }),
    /**
   * Rota: GET /api/trpc/user.get
   * Descrição: Retorna um usuário específico pelo ID
   * Entrada: string (ID do usuário)
   * Acesso: Público
   */
    get: publicProcedure
        .input(z.string())
        .query(async ({ input, ctx }) => {
            const id = input;
            const user = await ctx.db.user.findUnique({where:{id: id}});
            return user;
        }),
      /**
   * Rota: POST /api/trpc/user.create
   * Descrição: Cria um novo usuário
   * Entrada: userSchema (dados validados com zod)
   * Acesso: Público
   */
    create: publicProcedure
        .input(userSchema)
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.create({data: input})
            return user;
        }),
    /**
   * Rota: DELETE /api/trpc/user.delete
   * Descrição: Deleta um usuário pelo ID
   * Entrada: string (ID do usuário)
   * Acesso: Público
   */
    delete: publicProcedure
        .input(z.string())
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.delete({where:{id: input}});
            return user;
        }),
    /**
   * Rota: PUT /api/trpc/user.update
   * Descrição: Atualiza um usuário existente
   * Entrada: userSchema (deve conter `id` para localizar o registro)
   * Acesso: Público
   */
    update: publicProcedure
        .input(userSchema)
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.update({where:{id: input.id}, data: input});
            return user;
    }),
});