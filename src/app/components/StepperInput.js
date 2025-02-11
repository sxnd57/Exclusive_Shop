"use client"
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function StepperInput() {
  const [quantity, setQuantity] = useState(1);

  const stepUp = () => {
    setQuantity((prev) => prev + 1);
  }

  const stepDown = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }



  return (
    <div className='flex'>
      <button onClick={stepDown} className='p-2 border rounded-l-md hover:bg-secondary-3 hover:text-white'><Minus strokeWidth={1} /></button>
      <input type='text' value={quantity} className='w-20 border text-center focus:outline-0 cursor-default select-none' readOnly />
      <button onClick={stepUp} className='p-2 border rounded-r-md hover:bg-secondary-3 hover:text-white'><Plus strokeWidth={1} /></button>
    </div>
  )
}


