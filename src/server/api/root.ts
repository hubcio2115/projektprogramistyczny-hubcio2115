import { createTRPCRouter } from '~/server/api/trpc';
import { personalDataRouter } from '~/server/api/routers/personalData';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  personalData: personalDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
