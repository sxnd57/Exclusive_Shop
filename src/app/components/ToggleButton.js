"use client"
import clsx from 'clsx';
import React, { useState } from 'react';

export default function ToggleButton({ isToggle = false, children, className }) {
  const [isToggled, setIsToggled] = useState(isToggle);

  return (
    <button
      onClick={() => (setIsToggled(prev => !prev))}
      className={clsx("p-2 rounded-md", isToggled ? "bg-secondary-3 text-white" : '', className)}
    >
      {children}
    </button>
  );
}
