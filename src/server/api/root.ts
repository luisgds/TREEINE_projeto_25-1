import { productRouter } from "~/server/api/routers/products";
import { userRouter } from "./routers/user";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  products: productRouter ,// Agrupa todas as rotas relacionadas a produtos (ex: getAllProducts, createProduct, etc.)
  user: userRouter // Agrupa todas as rotas relacionadas a usuários (ex: get, update, delete, etc.)
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
