"use client";

import { updateQuantity, removeFromCart } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="dark:text-white">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={80}
                height={80}
                objectFit="contain"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      })
                    )
                  }
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100 dark:bg-gray-600 dark:text-white">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-r"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold dark:text-white">
              Total: ${total.toFixed(2)}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
