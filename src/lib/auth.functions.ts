import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Validates the site password against SITE_PASSWORD stored in the .env.
 * The password is the couple's relationship start date: 05/03/2025
 */
export const checkPassword = createServerFn({ method: "POST" })
  .inputValidator(z.object({ password: z.string().min(1).max(64) }))
  .handler(async ({ data }) => {
    const expected = (process.env.SITE_PASSWORD ?? "").trim();
    const given = data.password.trim();
    // Accept a few common date separators to be forgiving
    const norm = (s: string) => s.replace(/[-./\s]/g, "");
    const ok = expected.length > 0 && norm(given) === norm(expected);
    return { ok };
  });
