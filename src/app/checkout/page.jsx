import Image from "next/image";
import Monitor from '@/assets/images/monitor.png'
import Controller from '@/assets/images/controller.png'
import Bkash from '@/assets/images/Bkash.png';
import Visa from '@/assets/images/Visa.png';
import Mastercard from '@/assets/images/Mastercard.png';
import Nagad from '@/assets/images/Nagad.png';
import Button from "../components/Button";

export default function page() {
  return (
    <>
      <div className="text-4xl mb-12">Billing Details</div>
      <form className="flex justify-between">
        <div className="w-1/3">
          <div className="space-y-8">
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">First Name </label>
              <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Company Name <span className="text-secondary-3">*</span></label>
              <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Street Address <span className="text-secondary-3">*</span></label>
              <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Apartment, floor, etc.(option) <span className="text-secondary-3">*</span></label>
              <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Town/City<span className="text-secondary-3">*</span></label>
              <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Phone Number <span className="text-secondary-3">*</span></label>
              <input name="fistname" type="number" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="form-control">
              <label htmlFor="fistname" className="text-base text-text-2">Email Address<span className="text-secondary-3">*</span></label>
              <input name="fistname" type="email" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" />
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" />
              <p>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 mt-8 space-y-8">
          <div className="flex">
            <div className="w-2/3 space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-x-4 flex items-center">
                  <Image src={Monitor} alt="Monitor" width={54} height={54} />
                  <span className="text-base">LCD Monitor</span>
                </div>
                <span className="text-base">$650</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-x-4 flex items-center">
                  <Image src={Controller} alt="Monitor" width={54} height={54} />
                  <span className="text-base">H1 Gamepad</span>
                </div>
                <span className="text-base">$1100</span>
              </div>
              <div className="space-y-3">
                <div className="border-b-2 border-secondary flex justify-between py-4">
                  <span className="text-base">Subtotal</span>
                  <span className="text-base">$1750</span>
                </div>
                <div className="border-b-2 border-secondary flex justify-between py-4">
                  <span className="text-base">Shipping</span>
                  <span className="text-base">Free</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-base">Total</span>
                  <span className="text-base">$1750</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-x-4 flex items-center">
                  <input type="radio" name="bank" />
                  <label htmlFor="bank">Bank</label>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src={Bkash} width={42} height={28} alt="Bkash" />
                  <Image src={Visa} width={42} height={28} alt="Visa" />
                  <Image src={Mastercard} width={42} height={28} alt="Mastercard" />
                  <Image src={Nagad} width={42} height={28} alt="Nagad" />
                </div>
              </div>
              <div className="space-x-4 flex items-center">
                <input type="radio" name="bank" />
                <label htmlFor="bank">Cash on delivery</label>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input type="text" className="border-2 border-black rounded-md p-4" placeholder="Coupon Code" />
            <Button>Apply Coupon</Button>
          </div>
          <Button type="submit">Place Order</Button>
        </div>
      </form>
    </>
  )
}
