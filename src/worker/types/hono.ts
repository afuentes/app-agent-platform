/// <reference path="../../../worker-configuration.d.ts" />
import type { auth } from "@worker/auth";

type AuthInstance = ReturnType<typeof auth>;

export type HonoContext = {
  Bindings: Env;
  Variables: {
    user: AuthInstance["$Infer"]["Session"]["user"] | null;
    session: AuthInstance["$Infer"]["Session"]["session"] | null;
  };
};

export interface Env {
  // Cloudflare bindings
  DB: D1Database;
  AI: Ai;

  // Environment variables
  BETTER_AUTH_URL: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  ENVIRONMENT: string;
}
