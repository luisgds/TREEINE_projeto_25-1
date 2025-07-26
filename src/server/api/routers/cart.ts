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
    getAll: protectedProcedure.query(async ({ ctx }) => {

            const carts = await ctx.db.shopCart.findMany();
            return carts;

        }),
    get: protectedProcedure.input(z.number()).query(async ({ input, ctx }) => {

            const id = input;
            const cart = await ctx.db.shopCart.findUnique({where:{id: id}});
            return cart;

        }),
    create: protectedProcedure.input(cartSchema).mutation(async ({ input, ctx }) => {

            const check = await ctx.db.shopCart.findFirst({where:{user_id:input.user_id, }})

            // caso já haja um registro não precisamos criar um novo
            if(check){
                return;
            }

            const cart = await ctx.db.shopCart.create({data: input})
            return cart;
        }),
    delete: protectedProcedure.input(z.number()).mutation(async ({ input, ctx }) => {

            const cart = await ctx.db.shopCart.delete({where:{id: input}});
            return cart;

        }),
    update: protectedProcedure.input(cartSchema).mutation(async ({ input, ctx }) => {

            const cart = await ctx.db.shopCart.update({where:{id: input.id}, data: input});
            return cart;

    }),
});