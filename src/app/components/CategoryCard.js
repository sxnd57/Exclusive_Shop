export default function CategoryCard({ children, name }) {
  return (
    <div className="flex flex-col items-center border rounded-md p-[25px] space-y-4 transition-colors duration-300 ease-in-out hover:bg-secondary-3 hover:text-white">
      {children}
      <div className="font-light">{name}</div>
    </div>
  )
}
