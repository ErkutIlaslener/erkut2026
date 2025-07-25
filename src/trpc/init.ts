import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
// import { auth } from "@/modules/auth/lib/auth"; ❌ Disabled
import { headers } from "next/headers";

// Types
// import type { Session } from "@/modules/auth/lib/auth-types"; ❌ Disabled

export const createTRPCContext = cache(async () => {
  /**
   * @mock: No DB, no real session
   */
  // const session: Session | null = await auth.api.getSession({
  //   headers: await headers(),
  // });

  const session = null; // 🔧 Use null or mock user object

  const userId = session?.user?.id ?? null;

  return { userId };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async function isAuthed(opts) {
  const { ctx } = opts;

  if (!ctx.userId) {
    throw new Error("Not authenticated");
  }

  return opts.next({
    ctx: {
      ...ctx,
    },
  });
});
