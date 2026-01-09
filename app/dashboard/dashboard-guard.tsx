"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const signedIn = localStorage.getItem("signedIn");

    if (!signedIn) {
      router.replace("/");
    } else {
      setAllowed(true);
    }
  }, [router]);

  return (
    <>
      {!allowed ? null : children}
    </>
  );
}
