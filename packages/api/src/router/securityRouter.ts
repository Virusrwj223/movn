import { z } from "zod";

import { AuthoriseEmail } from "@acme/controller";

import { createTRPCRouter, publicProcedure } from "../trpc";

// import { handleBiErrorThrower } from "../utility/handleBiErrorThrower";

export const securityRouter = createTRPCRouter({
  continueWithEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation((opts) => {
      try {
        new AuthoriseEmail(opts.input.email).execute();
      } catch (err) {
        throw Error(); //handleBiErrorThrower(err, "AUTHORISEEMAIL");
      }
    }),
  //   authoriseOTP: publicProcedure
  //     .input(z.object({ email: z.string(), otp: z.number() }))
  //     .mutation(async (opts) => {
  //       try {
  //         const { input } = opts;

  //         return await new AuthoriseOTPController(
  //           input.email,
  //           input.otp,
  //         ).execute();
  //       } catch (err) {
  //         throw handleBiErrorThrower(err, "AUTHORISEOTP");
  //       }
  //     }),
  //   signup: privateEmailProcedure
  //     .input(
  //       z.object({
  //         username: z.string(),
  //         name: z.string(),
  //         dateOfBirth: z.date(), //.datetime(), //dd-mm-yyyy
  //         country: z.enum(countryArr),
  //       }),
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       try {
  //         const dietaryRestrictions = "NIL";
  //         return await new SignUp(
  //           ctx.parsedToken.email,
  //           input.username,
  //           input.name,
  //           input.dateOfBirth,
  //           input.country,
  //           dietaryRestrictions,
  //         ).execute();
  //       } catch (err) {
  //         throw handleBiErrorThrower(err, "SIGNUP");
  //       }
  //     }),
});
