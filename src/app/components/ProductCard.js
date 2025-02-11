import { Eye, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ name, image, price, discount, sales, productDetail = "#" }) {
  return (
    <>
      <div className="card rounded-lg group transition-all duration-200 linear">
        <div className="card-header">
          <div className="card-thumbnail w-full h-[250px] relative overflow-hidden">
            <Image className="w-full h-full object-cover rounded-lg" src={image} alt={name} width={1920} height={1080} />
            <div className="absolute bg-secondary-3 top-3 left-3 rounded-lg text-[12px] text-white py-1 px-3"> -{sales}</div>
            <div className="absolute flex flex-col space-y-3 top-3 right-3 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <button className="bg-secondary-1 p-2 rounded-full hover:bg-gray-500 hover:text-white"><Heart size={18} /></button>
              <button className="bg-secondary-1 p-2 rounded-full hover:bg-gray-500 hover:text-white">
                <Link href={productDetail}><Eye size={18} /></Link>
              </button>
            </div>
            <div className="absolute w-full bottom-0 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <button className="w-full bg-black text-white justify-center p-3 rounded-b-lg text-[16px] flex items-center gap-2">
                <ShoppingCart size={18} />
                Add to cart
              </button>
            </div>
          </div>
          <div className="card-body mt-4 mb-3 px-1">
            <h3 className="card-title text-[16px] font-medium">{name}</h3>
            <div className="card-price mt-2">
              <span className="text-[16px] font-medium text-secondary-3">${price}</span>
              <span className="text-[14px] font-medium text-text-2 line-through ml-2">${discount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
