import { create } from "domain";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";


const ProductSchema = z.object({
    id: z.number(),
    nome: z.string(),
    preco: z.number(),
    descricao: z.string()
})

export const postRouter = createTRPCRouter({

  createProduct: publicProcedure.input(ProductSchema).query(async ({ input, ctx }) => {

    const {nome} = input;
    const {preco} = input;
    const {descricao} = input;
    await ctx.db.product.create({data:{nome, preco, descricao}});

    return;

  }),


})