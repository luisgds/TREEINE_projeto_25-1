import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

/*
    model ShopCart{
        id Int @id @default(autoincrement())
        user_id String
        product_id Int
        quantity Int
        cart User @relation(fields: [user_id], references: [id], onDelete: Cascade)
        product Product @relation(fields: [product_id], references: [id], onDelete: Cascade)
    }
*/

const cartSchema = z.object({
  id: z.number().optional(),
  user_id: z.string(),
  product_id: z.number(),
  quantity: z.number()
})

export const cartRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ ctx }) => {
            const carts = await ctx.db.cart.findMany();
            return carts;
        }),
    get: publicProcedure
        .input(z.number())
        .query(async ({ input, ctx }) => {
            const id = input;
            const cart = await ctx.db.cart.findUnique({where:{id: id}});
            return cart;
        }),
    create: publicProcedure
        .input(cartSchema)
        .mutation(async ({ input, ctx }) => {
            const cart = await ctx.db.cart.create({data: input})
            return cart;
        }),
    delete: publicProcedure
        .input(z.number())
        .mutation(async ({ input, ctx }) => {
            const cart = await ctx.db.cart.delete({where:{id: input}});
            return cart;
        }),
    update: publicProcedure
        .input(cartSchema)
        .mutation(async ({ input, ctx }) => {
            const cart = await ctx.db.cart.update({where:{id: input.id}, data: input});
            return cart;
    }),
});