import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

// model User {
//     id            String    @id @default(cuid())
//     name          String?
//     email         String?   @unique
//     emailVerified DateTime?
//     image         String?
//     accounts      Account[]
//     sessions      Session[]
//     carts         ShopCart[]
// }

// Schema feito com base na model acima. TODO: falta adicionar os fields relacionais
const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional()
})

export const userRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            const users = await ctx.db.user.findMany();
            return users;
        }),
    get: publicProcedure
        .input(z.string())
        .query(async ({ input, ctx }) => {
            const id = input;
            const user = await ctx.db.user.findUnique({where:{id: id}});
            return user;
        }),
    create: publicProcedure
        .input(userSchema)
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.create({data: input})
            return user;
        }),
    delete: publicProcedure
        .input(z.string())
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.delete({where:{id: input}});
            return user;
        }),
    update: publicProcedure
        .input(userSchema)
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.update({where:{id: input.id}, data: input});
            return user;
    }),
});