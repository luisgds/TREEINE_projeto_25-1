import { z } from "zod";
import { unlinkSync } from "fs";

import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
/*
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
*/


const productSchema = z.object({
  id: z.number().optional(),
  nome: z.string(),
  preco: z.coerce.number().min(0),
  descricao: z.string(),
  imageId: z.number()
})

export const productRouter = createTRPCRouter({

  // retorna todos os produtos
  getAllProducts: publicProcedure.query(async ({ ctx }) => {

    const products = await ctx.db.product.findMany();
    return products;
  }),

  // retorna um produto definido por id
  getProduct: publicProcedure.input(z.number()).query(async ({ input, ctx }) => {
    const id = input;
    const product = await ctx.db.product.findUnique({where:{id: Number(id)}});
    return product;
  }),

  // cria produto
  createProduct: adminProcedure.input(productSchema).mutation(async ({ input, ctx }) => {

    const product = await ctx.db.product.create({data:{imageId:input.imageId ,descricao: input.descricao, nome: input.nome, preco: input.preco}})
    
    return product;

  }),

  // deleta produto por id
  deleteProduct: adminProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
    const product = await ctx.db.product.delete({where:{id: input}});

    const fileId = product.imageId;
    unlinkSync(`./public/uploads/${fileId}.jpg`);
    return product;
  }),

  // atualiza produto por id
  updateProduct: adminProcedure.input(productSchema).mutation(async ({ input, ctx }) => {

    const product = await ctx.db.product.update({where:{id: input.id}, data:{nome: input.nome, preco: input.preco, descricao: input.descricao}});
    return product;
  }),

});
