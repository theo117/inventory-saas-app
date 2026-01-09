"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  function handleSignOut() {
    localStorage.removeItem("signedIn");
    router.push("/");
  }

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
