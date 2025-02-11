import PS5_1 from '@/assets/images/ps5_1.png'
import PS5_2 from '@/assets/images/ps5_2.png'
import PS5_3 from '@/assets/images/ps5_3.png'
import PS5_4 from '@/assets/images/ps5_4.png'
import PS5_5 from '@/assets/images/ps5_5.png'
import { Heart, Minus, Plus, RefreshCcw, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import Button from '../components/Button'
import StepperInput from '../components/StepperInput'
import ToggleButton from '../components/ToggleButton'
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const urlProducts = [...Array(4)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);

  return (
    <>
      <div className="flex items-center gap-[50px] mb-[140px] h-[675px]">
        <div className="w-1/7 h-full flex flex-col items-center justify-center gap-y-14">
          <div className="bg-secondary-1 px-6 py-3 rounded-md">
            <Image src={PS5_1} alt='PS5' className='w-full object-cover' width={170} height={138} />
          </div>
          <div className="bg-secondary-1 px-6 py-3 rounded-md">
            <Image src={PS5_2} alt='PS5' className='w-full object-cover' width={1920} height={1080} />
          </div>
          <div className="bg-secondary-1 px-6 py-3 rounded-md">
            <Image src={PS5_3} alt='PS5' className='w-full object-cover' width={1920} height={1080} />
          </div>
          <div className="bg-secondary-1 px-6 py-3 rounded-md">
            <Image src={PS5_4} alt='PS5' className='w-full object-cover' width={1920} height={1080} />
          </div>
        </div>
        <div className="w-auto h-full flex">
          <div className="bg-secondary-1 rounded-md flex items-center justify-center px-7">
            <Image src={PS5_5} alt='PS5' className='w-full' width={1920} height={1080} />
          </div>
        </div>
        <div className="w-2/6 h-full">
          <div className="space-y-4 mb-6">
            <div className="text-[24px] font-bold">DualSense - PS5 Wireless Game Controller</div>
            <div className="flex items-center justify-betwee gap-2">
              <Star fill='#FFAD33' color='transparent' strokeWidth={1} />
              <Star fill='#FFAD33' color='transparent' strokeWidth={1} />
              <Star fill='#FFAD33' color='transparent' strokeWidth={1} />
              <Star fill='#FFAD33' color='transparent' strokeWidth={1} />
              <Star className='fill-text-2' color='transparent' strokeWidth={1} />
              <span>(150 reviews)</span>
              <span className='tex-secondary-1'>|</span>
              <span className='text-[#00ff66]'>In Stock</span>
            </div>
            <div className="text-[24px]">$192.00</div>
          </div>
          <div className="space-y-6">
            <div className="text-base text-justify">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</div>
            <hr />
            <div className="flex items-center space-x-3">
              <span className='text-[20px] mr-6'>Colors: </span>
              <input name='chooseColorProduct' type='radio' className="appearance-none w-5 h-5 bg-slate-600 rounded-full cursor-pointer checked:border-black checked:border-2" />
              <input name='chooseColorProduct' type='radio' className="appearance-none w-5 h-5 bg-pink-400 rounded-full cursor-pointer checked:border-black checked:border-2" />
            </div>

            <div className="flex items-center space-x-3">
              <span className='text-[20px] mr-6'>Size: </span>
              <div className="h-8 w-8 rounded-md border border-black flex justify-center items-center">S</div>
              <div className="h-8 w-8 rounded-md border border-black flex justify-center items-center">M</div>
              <div className="h-8 w-8 rounded-md border border-black flex justify-center items-center bg-secondary-3 text-white">L</div>
              <div className="h-8 w-8 rounded-md border border-black flex justify-center items-center">XL</div>
            </div>
            <div className="flex justify-between">
              <StepperInput />
              <Button className="py-[10px] px-12">Buy Now</Button>
              <ToggleButton className="border"><Heart /></ToggleButton>
            </div>
            <div className="w-ful">
              <div className="flex items-center space-x-4 p-6 border border-b-0 rounded-t-md">
                <Truck size={40} />
                <div className="">
                  <div className="text-base font-medium">Free Delivery</div>
                  <div className="underline text-[12px]">Enter your postal code for Delivery Availability</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 border rounded-b-md">
                <RefreshCcw size={40} />
                <div className="">
                  <div className="text-base font-medium">Return Delivery</div>
                  <div className="underline text-[12px]">Free 30 Days Delivery Returns. Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section className="mb-[60px]" name={"Related Items"} />
      <div className="flex mb-[140px] space-x-6">
        {urlProducts.map((url) => (
          <div className="w-1/4">
            <ProductCard
              image={url}
              name="Apple Watch Series 6"
              price={399}
              discount={499}
              sales={'40%'}
            />
          </div>
        ))}
      </div>
    </>
  )
}
