import clsx from 'clsx';

export default function Button({ children, name, className, onClick, variant = 'primary', type = "button" }) {
  const variants = {
    primary: 'bg-secondary-3 text-white',
    default: 'bg-transparent text-black hover:bg-secondary-1',
    outline: 'border-2 text-black hover:bg-text-1',
    danger: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
  };

  return (
    <button
      className={clsx(
        'rounded-md px-12 py-4 flex items-center justify-center',
        variants[variant],
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
      {name}
    </button>
  );
}
