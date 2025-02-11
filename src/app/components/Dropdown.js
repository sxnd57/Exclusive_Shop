"use client"
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import clsx from "clsx";

const Dropdown = ({ options, onSelect, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown button */}
      <button onClick={() => setIsOpen(!isOpen)} className={clsx(className, "flex border rounded-full p-1 transition-colors duration-200 ease-linear", isOpen ? ' text-white bg-secondary-3 ' : '')}>{children}</button>

      {/* Dropdown list */}
      {isOpen && (
        <div className='absolute top-full right-0 bg-black/40 backdrop-blur-md space-y-4 py-3 pl-4 pr-2 rounded-xl text-white mt-4 z-[999]'>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-4 cursor-pointer hover:bg-black/10 px-3 py-2 rounded-lg" onClick={() => handleSelect(option)}>
              {option.icon}
              <Link href={option.link} className='whitespace-nowrap text-sm'>{option.label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
