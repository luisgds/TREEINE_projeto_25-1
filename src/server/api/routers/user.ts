import { z } from "zod"; // Importa o Zod para validação de dados

import {
    adminProcedure,
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
const userUpdateSchema = z.object({
  id: z.string(),                       // obrigatorio para criação, necessário para update
  name: z.string().optional(),          // nome é opcional
  email: z.string().optional(),         // email é opcional (mas deve ser único no banco)
  image: z.string().optional(),        // URL da imagem de perfil, se houver
  role: z.string().optional()
  
});

// Usuários são criados pelo next auth
// por isso aqui não temos user.create
export const userRouter = createTRPCRouter({
/**
   * Rota: GET /api/trpc/user.getAll
   * Descrição: Retorna todos os usuários cadastrados no banco
   * Acesso: Público
*/
    getAll: publicProcedure.query(async ({ ctx }) => {
            const users = await ctx.db.user.findMany();
            return users;
        }),
    /**
   * Rota: GET /api/trpc/user.get
   * Descrição: Retorna um usuário específico pelo ID
   * Entrada: string (ID do usuário)
   * Acesso: Público
   */
    get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
            const id = input;
            const user = await ctx.db.user.findUnique({where:{id: id}});
            return user;
        }),
    countUsers: publicProcedure.query(async ({ ctx }) => {
            const count = await ctx.db.user.count({where: {role:"user"}});
            return count;
        }),
    /**
   * Rota: DELETE /api/trpc/user.delete
   * Descrição: Deleta um usuário pelo ID
   * Entrada: string (ID do usuário)
   * Acesso: Admin
   */
    delete: adminProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.delete({where:{id: input}});
            return user;
        }),
    /**
   * Rota: PUT /api/trpc/user.update
   * Descrição: Atualiza um usuário existente
   * Entrada: userSchema (deve conter `id` para localizar o registro)
   * Acesso: Admin
   */
    update: adminProcedure.input(userUpdateSchema).mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.update({where:{id: input.id}, data: input});
            return user;
    }),
    /**
   * Rota: PUT /api/trpc/user.hasAdminPermission
   * Descrição: Retorna um valor booleano que sinaliza a permissão para acessar página de admin
   * Entrada: string (ID do usuário)
   * Acesso: Público
   */
    hasAdminPermission: publicProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
            let user = await ctx.db.user.findUnique({where:{id:input}});

            if(user?.role != "user"){
                return true;
            } else {
                return false;
            }

    }),
});