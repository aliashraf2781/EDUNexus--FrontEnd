import React, { useEffect, useState } from "react";
import { Heart, Star } from "lucide-react";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3010/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4">
        Wishlist ({wishlist.length})
      </h2>

      <div className="lg:hidden space-y-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3"
          >
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-20 rounded-md object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#FF6636] fill-[#FF6636]" />
                  {item.rating} ({item.reviews} Reviews)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Course by:{" "}
                  <span className="text-gray-700 font-medium">
                    {item.instructor.join(" · ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="text-[#FF6636] font-semibold">
              ${item.price.toFixed(2)}{" "}
              {item.oldPrice && (
                <span className="line-through text-gray-400 ml-1 font-normal">
                  ${item.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
                Buy Now
              </button>
              <button className="bg-[#FF6636] text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm font-medium">
                Add To Cart
              </button>
              <button className="text-[#FF6636] hover:text-[#FF6636] text-lg bg-gray-200 p-2">
                <Heart className="w-5 h-5 fill-[#FF6636]" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
                <th className="p-4 text-left">COURSE</th>
                <th className="p-4 text-left">PRICES</th>
                <th className="p-4 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 text-sm hover:bg-gray-50"
                >
                  <td className="p-4 flex items-start gap-4 min-w-[300px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-20 rounded-md object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FF6636] fill-[#FF6636]" />
                        {item.rating} ({item.reviews} Reviews)
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Course by:{" "}
                        <span className="text-gray-700 font-medium">
                          {item.instructor.join(" · ")}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-[#FF6636] font-semibold min-w-[100px]">
                    ${item.price.toFixed(2)}{" "}
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 ml-1 font-normal">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </td>
                  <td className="p-4 min-w-[200px]">
                    <div className="flex flex-wrap gap-2 items-center">
                      <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
                        Buy Now
                      </button>
                      <button className="bg-[#FF6636] text-white px-4 py-2 rounded-md hover:bg-orange-600 text-sm font-medium">
                        Add To Cart
                      </button>
                      <button className="text-[#FF6636] hover:text-[#FF6636] text-lg bg-gray-200 p-2">
                        <Heart className="w-5 h-5 fill-[#FF6636]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
