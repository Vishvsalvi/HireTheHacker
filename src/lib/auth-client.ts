import { createAuthClient } from "better-auth/react";
import { BetterAuthConfig } from "./env";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: BetterAuthConfig.BETTER_AUTH_URL,
});
