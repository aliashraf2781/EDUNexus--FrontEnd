import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; 
import { Trash2 } from 'lucide-react';
import { getAllPromocodes } from '../../api/courses';

// const promoCodes = {
//   SAVE10: 10,
//   HALF: 50,
// };

const Cart = () => {
    const { cart, removeFromCart, updateCourseInCart } = useCart();
    const [promoInputs, setPromoInputs] = useState({});
    const [promoCodes, setPromoCodes] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const codesData = await getAllPromocodes()
            setPromoCodes(codesData.data)
        }
        fetchData()
    }, [])

  const applyPromo = (courseId) => {
    const codeInput = promoInputs[courseId]?.toUpperCase();
    const promoCodeData = promoCodes.find(p => p.code === codeInput && (!p.courseId || p.courseId === courseId));
    const discount = promoCodeData['discount'];
    console.log(codeInput)
    console.log(promoCodeData)
    console.log(discount)

    if (discount) {
      const course = cart.find((c) => c.id === courseId);
      const discountedPrice = +(course.price * (1 - discount / 100)).toFixed(2);
      updateCourseInCart(courseId, {
        discountedPrice,
        promoCode: promoCodeData,
        discountPercent: discount,
      });
      console.log(discountedPrice)
    } else {
      alert('Invalid promo code for this course');
    }
  };

  const getTotal = () => {
    return cart.reduce((sum, course) => {
        const price = course.discountedPrice ?? course.price;
        return sum + price;
    }, 0).toFixed(2);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md  p-5 mb-5 border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div className='flex gap-2'>
                <img src={course.thumbnail} alt="courseimage" width={150} className='rounded'/>
                <div className='flex flex-col'>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {course.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                    Original Price:{' '}
                    <span className={`text-dark ${(course.discountedPrice || course.discountedPrice == 0) ? `line-through` : ``}`}>
                        ${course.price}
                    </span>
                    </p>
                    {(course.discountedPrice || course.discountedPrice == 0) && (
                    <p className="text-primary font-medium mb-1">
                        New Price: ${course.discountedPrice} ({course.discountPercent}% off)
                    </p>
                    )}
                </div>
              </div>
              <div className='flex flex-col items-end gap-7'>
                <Trash2 className='text-red-500 hover:text-red-700' size={19} onClick={() => removeFromCart(course.id)}/>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="border px-3 py-1 border-gray-300 outline-none w-48 text-sm"
                    value={promoInputs[course.id] || ''}
                    onChange={(e) =>
                      setPromoInputs({ ...promoInputs, [course.id]: e.target.value })
                    }
                  />
                  <button
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-1 text-sm cursor-pointer"
                    onClick={() => applyPromo(course.id)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">
            Total: <span className="text-primary">${getTotal()}</span>
          </p>
          <button className="mt-4 bg-white font-semibold text-primary px-5 py-2 border-2 border-primary">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;