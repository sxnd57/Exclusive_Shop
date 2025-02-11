import Image from 'next/image'
import React from 'react'
import Thumbail from '@/assets/images/about_thumb.png'
import TomCruise from '@/assets/images/tomecruise.png'
import EmmaWatson from '@/assets/images/emmawatson.png'
import WillSmith from '@/assets/images/willsmith.png'
import { CircleDollarSign, Headphones, House, Instagram, Linkedin, Receipt, ShieldCheck, ShoppingBag, ShoppingBagIcon, Truck, Twitter } from 'lucide-react'


export default function About() {
  return (
    <div className='space-y-[140px]'>
      <div className="flex items-center justify-between gap-[75px]">
        <div className="w-full md:w-1/2">
          <div className="text-[54px] mb-10 font-bold">Our Story</div>
          <p className="text-base mb-6 text-justify">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className="text-base text-justify">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={Thumbail} alt='thumbnail' width={1920} height={1080} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-[30px]">
        <div className="w-1/4">
          <div className="text-center border rounded-md py-[30px] px-[50px] hover:bg-secondary-3 group">
            <div className="bg-black group-hover:bg-white group-hover:text-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
              <House size={40} strokeWidth={1} />
            </div>
            <h3 className="font-semibold text-[32px] mb-2">10.5k</h3>
            <p className="text-base">Sallers active our site</p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-center border rounded-md py-[30px] px-[50px] hover:bg-secondary-3 group">
            <div className="bg-black group-hover:bg-white group-hover:text-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
              <CircleDollarSign size={40} strokeWidth={1} />
            </div>
            <h3 className="font-semibold text-[32px] mb-2">33k</h3>
            <p className="text-base">Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-center border rounded-md py-[30px] px-[50px] hover:bg-secondary-3 group">
            <div className="bg-black group-hover:bg-white group-hover:text-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
              <ShoppingBagIcon size={40} strokeWidth={1} />
            </div>
            <h3 className="font-semibold text-[32px] mb-2">45.5k</h3>
            <p className="text-base">Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-center border rounded-md py-[30px] px-[50px] hover:bg-secondary-3 group">
            <div className="bg-black group-hover:bg-white group-hover:text-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
              <Receipt size={40} strokeWidth={1} />
            </div>
            <h3 className="font-semibold text-[32px] mb-2">25k</h3>
            <p className="text-base">Anual gross sale in our site</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="">
          <Image src={TomCruise} width={370} height={430} alt='Tom Cruise' className='mb-8 w-full' />
          <div className="text-[32px] font-medium mb-2">Tom Cruise</div>
          <div className="text-base mb-4">Founder & Chairman</div>
          <div className="flex items-center space-x-4">
            <Twitter className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Instagram className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Linkedin className='hover:fill-slate-200 cursor-pointer' size={24} />
          </div>
        </div>
        <div className="">
          <Image src={EmmaWatson} width={370} height={430} alt='Tom Cruise' className='mb-8 w-full' />
          <div className="text-[32px] font-medium mb-2">Emma Watson</div>
          <div className="text-base mb-4">Managing Director</div>
          <div className="flex items-center space-x-4">
            <Twitter className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Instagram className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Linkedin className='hover:fill-slate-200 cursor-pointer' size={24} />
          </div>
        </div>
        <div className="">
          <Image src={WillSmith} width={370} height={430} alt='Tom Cruise' className='mb-8 w-full' />
          <div className="text-[32px] font-medium mb-2">Will Smith</div>
          <div className="text-base mb-4">Product Designer</div>
          <div className="flex items-center space-x-4">
            <Twitter className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Instagram className='hover:fill-slate-200 cursor-pointer' size={24} />
            <Linkedin className='hover:fill-slate-200 cursor-pointer' size={24} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="text-center">
          <div className="bg-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
            <Truck size={40} strokeWidth={1} />
          </div>
          <h3 className="font-semibold text-[20px] mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="text-center">
          <div className="bg-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
            <Headphones size={40} strokeWidth={1} />
          </div>
          <h3 className="font-semibold text-[20px] mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center">
          <div className="bg-black p-3 border-[8px] border-primary rounded-full text-white inline-block mb-6">
            <ShieldCheck size={40} strokeWidth={1} />
          </div>
          <h3 className="font-semibold text-[20px] mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  )
}
