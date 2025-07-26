import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const userUpdateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
  role: z.string().optional()
})

// Usuários são criados pelo next auth
// por isso aqui não temos user.create
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
    countUsers: publicProcedure
        .query(async ({ ctx }) => {
            const count = await ctx.db.user.count({where: {role:"user"}});
            return count;
        }),
    delete: publicProcedure
        .input(z.string())
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.delete({where:{id: input}});
            return user;
        }),
    update: publicProcedure
        .input(userUpdateSchema)
        .mutation(async ({ input, ctx }) => {
            const user = await ctx.db.user.update({where:{id: input.id}, data: input});
            return user;
    }),
});