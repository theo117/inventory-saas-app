
"use client";

export const dynamic = "force-dynamic";



import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase-browser";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) router.push("/dashboard");
  }

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (!error) alert("Check your email to confirm!");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <div className="bg-white p-8 rounded shadow space-y-4">

        <h1 className="text-xl font-semibold">Login</h1>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
  onClick={handleLogin as any}
  className="bg-black text-white w-full py-2"
>
  Login
</button>

       <button
  type="button"
  onClick={() => alert("Signup button clicked")}
  className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
>
  SIGN UP
</button>

      </div>
    </div>
  );
}
