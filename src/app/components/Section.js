export default function Section({ name }) {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[20px] h-[40px] bg-secondary-3 rounded-md"></div>
        <span className="font-bold ml-2 text-[16px] text-secondary-3">{name}</span>
      </div>
    </>
  )
}
