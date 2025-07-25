import "server-only"; // prevent client usage
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { createCallerFactory, createTRPCContext } from "./init";
import { makeQueryClient } from "./query-client";
import { appRouter } from "./routers/_app";

export const getQueryClient = cache(makeQueryClient);

const getCaller = cache(async () => {
  const ctx = await createTRPCContext();
  return createCallerFactory(appRouter)(ctx);
});

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  async () => getCaller(),
  getQueryClient
);
