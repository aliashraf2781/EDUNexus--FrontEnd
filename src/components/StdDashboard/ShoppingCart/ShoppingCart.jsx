import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const initialCourses = [
  {
    id: 1,
    name: "Full-Stack Web Development Bootcamp",
    price: 76,
    image: "src/assets/courses images/course8.png",
    date: "2025-05-03",
  },
  {
    id: 2,
    name: "Entrepreneurship Crash Course",
    price: 44,
    image: "src/assets/courses images/course7.png",
    date: "2025-05-03",
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCourses);
  const [shipping] = useState(0);
  const [history, setHistory] = useState([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + shipping;

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const completePurchase = () => {
    const newHistory = [...history, ...cart];
    setHistory(newHistory);
    setCart([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <h1 className="px-1 text-2xl font-semibold mb-2 text-[#FF6636]">My Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          {cart.length > 0 ? (
            <>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Course</th>
                    <th className="py-2">Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="flex items-center gap-4 py-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 text-sm"
                        >
                          ✕ Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="border border-gray-300 outline-0 px-3 py-2 flex-1"
                />
                <button className="bg-[#FF6636] text-white px-4 py-2">Apply</button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-4 space-y-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex justify-between">
            <span>Courses</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {cart.length > 0 && (
            <div className="text-sm text-gray-500">
              Purchase Date: {cart[0].date}
            </div>
          )}
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Lifetime access & certificates included
          </p>
          <button
            className="w-full bg-[#FF6636] text-white py-2 rounded"
            onClick={completePurchase}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      {history.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-[#FF6636]">Purchase History</h2>
          <ul className="space-y-3">
            {history.map((course, idx) => (
              <li key={idx} className="flex items-center gap-4 border-b pb-2">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-1">
                  <div className="font-medium">{course.name}</div>
                  <div className="text-sm text-gray-500">
                    Purchased on: {course.date}
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  ${course.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
