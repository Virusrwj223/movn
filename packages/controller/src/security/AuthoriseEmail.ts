// import { TRPCError } from "@trpc/server";

// import { authenticator } from "otplib";

// import { UserOTPVerification } from "@acme/db";

// import { sendEmail } from "../utils/sendGridEmail";

/**
 * Positive test cases not tested to prevent email sending credit usage
 */
export class AuthoriseEmail {
  private email: string;
  constructor(email: string) {
    this.email = email;
  }
  public execute() {
    return "";
  }
}
