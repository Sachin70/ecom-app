"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInForm({ providers }: { providers: any }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (providerId: string) => {
    setIsLoading(true);
    await signIn(providerId, { callbackUrl: "/" });
    setIsLoading(false);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 space-y-4">
        {Object.values(providers || {}).map((provider: any) => (
          <button
            key={provider.id}
            onClick={() => handleSignIn(provider.id)}
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : `Sign in with ${provider.name}`}
          </button>
        ))}
      </div>
    </>
  );
}
