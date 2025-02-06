import clsx from 'clsx'

export default function Button({ name, className, onClick }) {
  return (
    <button
      className={clsx(
        'bg-secondary-3 rounded-md px-12 text-white py-4',
        className
      )}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
