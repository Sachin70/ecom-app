import SignInForm from "@/components/SignInForm";
import { getProviders } from "next-auth/react";

export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <SignInForm providers={providers} />
      </div>
    </div>
  );
}
