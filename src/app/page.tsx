"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRootStore } from "@/services/root-store/root-store-context";

const Page = observer(() => {
  const { authStore } = useRootStore();

  return (
    <div>
      <h1>Welcome to the App</h1>
      {!authStore.isAuthenticated ? (
        <div>
          <p>Please log in to access more features.</p>
          <Link href="/login">Go to Login</Link>
          <Link href="/register">Go to Login</Link>
        </div>
      ) : (
        <p>Welcome back, {authStore.user?.email}!</p>
      )}
    </div>
  );
});

export default Page;
