import React from 'react';
import { FcNext } from "react-icons/fc";
import { IoInformationCircleOutline } from "react-icons/io5";

export const RevenueCard = ({title, amount, orderCount}) => {
  return (
    <div className='bg-white rounded-md shadow-sm border-2 p-4 space-y-5'>
      <div className='text-gray-500 text-md font-semibold flex items-center'>{title} <div className='ml-2'><IoInformationCircleOutline /></div></div>
      <div className='flex justify-between items-center'>
        <div className='font-extrabold text-2xl'>
         ₹ {amount}
        </div>
        <div className='text-blue-300 font-extrabold underline cursor-pointer'>
          {orderCount ? (<div className='flex justify-center items-center'>{orderCount} Orders <span><FcNext /></span></div>) : null}
        </div>
      </div>
    </div>
  );
};
