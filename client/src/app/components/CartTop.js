import React, { useContext } from 'react';
// icons
import { IoCloseOutline } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';

const CartTop = () => {
  const { setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div className='w-full h-20 flex items-center justify-between px-10 text-black border-b'>
      <div className='font-semibold'>Shopping Bag({itemAmount})</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer group'>
        <IoCloseOutline className='text-3xl transition-all group-hover:rotate-180 duration-300' />
      </div>
    </div>
  );
};

export default CartTop;
