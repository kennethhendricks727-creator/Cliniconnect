# CliniConnect Training OS — Supabase setup

This version uses Supabase Auth for individual representative accounts and a private `learner_progress` row for each account. Course content remains in the app; learner progress, quiz attempts, and certificate data are stored in Supabase.

## 1. Create a Supabase project

1. Create a project at https://supabase.com.
2. In **Project Settings → API**, copy the **Project URL** and the **publishable key** (or legacy `anon` key).
3. Do not use the `service_role` key in this frontend app. Never put it in a `VITE_` environment variable.

## 2. Create the progress table

1. Open **SQL Editor** in the Supabase dashboard.
2. Open `supabase/migrations/202611030001_create_learner_progress.sql` from this project.
3. Paste the complete SQL into the editor and run it.
4. Confirm that `public.learner_progress` appears in Table Editor and that Row Level Security is enabled.

The table has one row per authenticated user. Its RLS policies require `auth.uid() = user_id` for reads, inserts, and updates. Do not disable RLS.

## 3. Enable open registration

1. Open **Authentication → Providers → Email**.
2. Ensure the Email provider is enabled and new user signups are allowed.
3. Decide whether to require email confirmation. With confirmation enabled, users must click the confirmation email before signing in. Supabase's default email sender has restrictive rate limits; for a real rollout, configure a trusted SMTP provider. If you temporarily disable confirmation for testing, understand that users' email addresses will not be verified.
4. Under **Authentication → URL Configuration**, add your deployed app URL to the allowed Site URL / Redirect URLs. During local development, allow `http://localhost:5173/**`.

## 4. Add the frontend environment variables

Copy `.env.example` to `.env.local`, then replace the placeholders:

```env
VITE_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```

Only the Supabase project URL and publishable/anon key belong in the frontend. Never use a service-role or secret key here. Restart the Vite dev server after changing environment variables.

## 5. Install and run

```bash
pnpm install
pnpm dev
```

Or use `npm install` and `npm run dev` if you use npm. The first command installs `@supabase/supabase-js` and updates the package lockfile.

## 6. Test account isolation before inviting representatives

1. Create Account with a test email and password.
2. Complete one lesson and one quiz; wait until the header says **Saved**.
3. Sign out, create a second test account, and confirm it starts with empty progress.
4. Sign out and back into the first account; confirm its lesson and quiz progress return.
5. In Supabase Table Editor, verify there is one `learner_progress` row per user ID. Do not test isolation by disabling RLS.

## Notes

- Open registration means anyone who reaches the app can create an account. Share the app URL only with intended representatives if you do not want public enrollment.
- Existing progress in an old browser's localStorage is not automatically imported. This avoids assigning one person's old data to every new account. If the existing demo progress needs to be preserved, export and migrate it deliberately to the correct account.
- Certificate records are currently stored as part of each user's progress record. This implementation creates a unique browser-generated credential ID and code; it does not yet provide a public certificate-verification service or server-side issuance authority. Do not describe the code as a cryptographic hash or externally verified credential.
- Password reset uses Supabase Auth email. Configure email delivery and the allowed redirect URLs for production.
