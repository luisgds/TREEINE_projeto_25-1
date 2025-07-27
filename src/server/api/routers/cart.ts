import { z } from "zod";
import { createTRPCRouter, protectedProcedure,} from "~/server/api/trpc";

// schema.prima do carrinho
/*
* model ShopCart{
*     id Int @id @default(autoincrement())
*     user_id String
*     product_id Int
*     quantity Int
*     user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
*     product Product @relation(fields: [product_id], references: [id], onDelete: Cascade)
* }
*/

export const cartRouter = createTRPCRouter({
  
  getCartItems: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.shopCart.findMany({
      where: { user_id: ctx.session.user.id },
      include: {
        product: true, // inclui os detalhes do produto para o front-end
      },
    });
  }),

  addItem: protectedProcedure
    .input(z.object({ productId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { productId } = input;
      const userId = ctx.session.user.id;

      const targetItem = await ctx.db.shopCart.findFirst({
        where: { user_id: userId, product_id: productId },
      });

      if (targetItem) {
        // Se o item já existe, apenas incrementa
        return ctx.db.shopCart.update({
          where: { id: targetItem.id },
          data: { quantity: { increment: 1 } },
        });
      } else {
        // Senão, cria um novo item no carrinho
        return ctx.db.shopCart.create({
          data: {
            user_id: userId,
            product_id: productId,
            quantity: 1,
          },
        });
      }
    }),
 
  updateItemQuantity: protectedProcedure
    .input(z.object({ itemId: z.number(), quantity: z.number().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.shopCart.updateMany({
        where: { id: input.itemId, user_id: ctx.session.user.id },
        data: { quantity: input.quantity },
      });
    }),

  removeItem: protectedProcedure
    .input(z.object({ itemId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.shopCart.deleteMany({
        where: { id: input.itemId, user_id: ctx.session.user.id },
      });
    }),

   // Limpar todo o carrinho (agora só utilizado na finalização da compra)
  clearCart: protectedProcedure.mutation(async ({ ctx }) => {
    await ctx.db.shopCart.deleteMany({
      where: { user_id: ctx.session.user.id },
    });
    return { success: true };
  }),
});

