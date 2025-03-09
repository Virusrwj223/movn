import { securityRouter } from "./router/securityRouter";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  security: securityRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
