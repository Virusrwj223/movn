import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

// import User from "@acme/db";

// import { errorThrower404 } from "@acme/error";
// import { isValidEmailSignature, isValidSignature } from "@acme/logic";

// import { handleBiErrorThrower } from "./utility/handleBiErrorThrower";

export const createContext = (_opts: CreateNextContextOptions) => {
  const { req, res } = _opts;
  return {
    req,
    res,
  };
};

type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create({
  transformer: superjson,
});
export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// const isAuthed = t.middleware(async (opts) => {
//   try {
//     const { ctx, next } = opts;
//     const token = ctx.req.headers.authorization?.split(" ")[1];
//     if (!token)
//       throw new TRPCError({ code: "UNAUTHORIZED", message: "JWT:NOTOKEN" });

//     const parsedToken = isValidSignature(token.toString());

//     const user = await User.findById(parsedToken.userid);
//     if (user?.deletedOn != null) {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: `DELETEDUSER:NOTAUTHORISED`,
//       });
//     }
//     return next({
//       ctx: {
//         parsedToken,
//       },
//     });
//   } catch (e) {
//     if (e instanceof TRPCError) {
//       throw new TRPCError({
//         code: e.code,
//         message: e.message,
//       });
//     } else {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: `JWT:INTERNALSERVERERROR`,
//       });
//     }
//   }
// });

// export const privateProcedure = t.procedure.use(isAuthed);

// const isEmailAuthed = t.middleware((opts) => {
//   try {
//     const { ctx, next } = opts;
//     const token = ctx.req.headers.authorization?.split(" ")[1];
//     if (!token)
//       throw new TRPCError({ code: "UNAUTHORIZED", message: "JWT:NOTOKEN" });

//     const parsedToken = isValidEmailSignature(token.toString());

//     return next({
//       ctx: {
//         parsedToken,
//       },
//     });
//   } catch (e) {
//     if (e instanceof TRPCError) {
//       throw new TRPCError({
//         code: e.code,
//         message: e.message,
//       });
//     } else {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: `JWT:INTERNALSERVERERROR`,
//       });
//     }
//   }
// });

// export const privateEmailProcedure = t.procedure.use(isEmailAuthed);

// const isAdmin = t.middleware(async (opts) => {
//   try {
//     const { ctx, next } = opts;
//     const token = ctx.req.headers.authorization?.split(" ")[1];
//     if (!token)
//       throw new TRPCError({ code: "UNAUTHORIZED", message: "JWT:NOTOKEN" });

//     const parsedToken = isValidSignature(token.toString());

//     const user = await User.findById(parsedToken.userid);
//     if (user == null) throw new errorThrower404("ISADMIN").throwError();
//     if (user.deletedOn != null) {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: `DELETEDUSER:NOTAUTHORISED`,
//       });
//     }
//     if (!user.isAdmin) {
//       throw new TRPCError({
//         code: "UNAUTHORIZED",
//         message: `ISADMIN:NOTAUTHORISED`,
//       });
//     }
//     return next({
//       ctx: {
//         parsedToken,
//       },
//     });
//   } catch (err) {
//     throw handleBiErrorThrower(err, "ISADMIN");
//   }
// });

// export const adminProcedure = t.procedure.use(isAdmin);
