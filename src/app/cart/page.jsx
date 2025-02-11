import Image from "next/image";
import Monitor from '@/assets/images/monitor.png';
import GamePad from '@/assets/images/controller.png';
import { X, XCircle } from "lucide-react";
import Button from "../components/Button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="space-y-6 md:space-y-10 mb-12 md:mb-20">
        <div className="flex items-center justify-between shadow-md rounded-md py-6 px-10">
          <div className="text-sm md:text-base w-1/4">Product</div>
          <div className="text-sm md:text-base w-1/4 text-center">Price</div>
          <div className="text-sm md:text-base w-1/4 text-center">Quantity</div>
          <div className="text-sm md:text-base w-1/4 text-center">Subtotal</div>
        </div>
        <div className="flex items-center justify-between shadow-md rounded-md py-6 px-10">
          <div className="text-sm md:text-base flex items-center w-1/4">
            <div className="relative group mr-4">
              <Image src={Monitor} alt="monitor" width={54} height={54} />
              <div className="absolute bottom-2/3 right-2/3 group-hover:opacity-100 opacity-0 transition-opacity duration-200 ease-in-out cursor-pointer">
                <XCircle strokeWidth={1} fill="red" color="white" />
              </div>
            </div>
            <p>LCD Monitor</p>
          </div>
          <div className="text-sm md:text-base w-1/4 text-center">$650</div>
          <div className="text-sm md:text-base w-1/4 text-center">
            <input type="number" defaultValue={1} className="border-2 rounded-md py-[6px] px-3 w-20 focus:outline-0" />
          </div>
          <div className="text-sm md:text-base w-1/4 text-center">$650</div>
        </div>
        <div className="flex items-center justify-between shadow-md rounded-md py-6 px-10">
          <div className="text-sm md:text-base flex items-center w-1/4">
            <div className="relative group mr-4">
              <Image src={GamePad} alt="monitor" width={54} height={54} />
              <div className="absolute bottom-2/3 right-2/3 group-hover:opacity-100 opacity-0 transition-opacity duration-200 ease-in-out cursor-pointer">
                <XCircle strokeWidth={1} fill="red" color="white" />
              </div>
            </div>
            <p>Game Pad</p>
          </div>
          <div className="text-sm md:text-base w-1/4 text-center">$650</div>
          <div className="text-sm md:text-base w-1/4 text-center">
            <input type="number" defaultValue={1} className="border-2 rounded-md py-[6px] px-3 w-20 focus:outline-0" />
          </div>
          <div className="text-sm md:text-base w-1/4 text-center">$650</div>
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-sm md:text-base" variant="outline"><Link href={'#'}>Return To Shop</Link></Button>
          <Button className="text-sm md:text-base" variant="outline"><Link href={'#'}>Update Cart</Link></Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-start mb-20 md:mb-36 gap-4">
        <div className="flex items-center space-x-4 w-full xl:w-2/5">
          <input type="text" className="border-2 border-black rounded-md p-4 text-sm md:text-base w-auto" placeholder="Coupon Code" />
          <Button className="text-sm md:text-base">Apply Coupon</Button>
        </div>
        <div className="w-full xl:w-1/3">
          <div className="border-2 border-black rounded-md p-6 space-y-4">
            <div className="text-xl font-medium">Cart Total</div>
            <div className="border-b-2 border-secondary flex justify-between py-4">
              <span className="text-sm md:text-base">Subtotal</span>
              <span className="text-sm md:text-base">$1750</span>
            </div>
            <div className="border-b-2 border-secondary flex justify-between py-4">
              <span className="text-sm md:text-base">Shipping</span>
              <span className="text-sm md:text-base">Free</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="text-sm md:text-base">Total</span>
              <span className="text-sm md:text-base">$1750</span>
            </div>
            <Button className="mx-auto text-sm md:text-base">Process to checkout</Button>
          </div>
        </div>
      </div>
    </>
  )
}
