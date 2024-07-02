"use client";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import GoogleSVGIcon from "@/Icon/GoogleSVGIcon";

const Login = () => {
  const { signInWithGoogle, signInWithMicrosoft, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Welcome back
      </h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          <GoogleSVGIcon width="1.5rem" height="1.5rem" classNameStyle="mr-2" />
          Continue with Google
        </button>
        <button
          onClick={signInWithMicrosoft}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
            <path fill="#00A4EF" d="M12.5 1H23v10.5H12.5z" />
            <path fill="#7FBA00" d="M1 12.5h10.5V23H1z" />
            <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
          </svg>
          Continue with Microsoft
        </button>
      </div>
    </div>
  );
};

export default Login;
