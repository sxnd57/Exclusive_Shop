import clsx from "clsx";

export default function Section({ name, className }) {
  return (
    <div className={clsx("flex items-center", className)}>
      <div className="w-[20px] h-[40px] bg-secondary-3 rounded-md"></div>
      <span className="font-bold ml-2 text-[16px] text-secondary-3">{name}</span>
    </div>
  )
}
