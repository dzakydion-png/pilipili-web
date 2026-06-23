"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    void signOut({ callbackUrl: "/login" });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <p className="text-sm text-zinc-600">Keluar dari sesi...</p>
    </main>
  );
}
