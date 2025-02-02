"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useSearch } from "@/contexts/searchContext";
import { RootState } from "@/store/store";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useSearch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              E-Shop
            </Link>
          </div>
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="/cart"
              className="ml-4 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 relative"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {status === "loading" ? (
              <span className="ml-4 text-gray-500 dark:text-gray-400">
                Loading...
              </span>
            ) : session ? (
              <button
                onClick={() => signOut()}
                className="ml-4 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
