import SFPro from 'next/font/local';
import './globals.css'
import { Copyright, Heart, LogOut, Search, SendHorizontal, ShoppingBag, ShoppingBagIcon, ShoppingCart, Star, User, XCircle } from 'lucide-react';
import Image from 'next/image';
import BackToTop from './components/BackToTop';
import Dropdown from './components/Dropdown';
import QRCode from '@/assets/images/Qrcode.png'
import GGPlay from '@/assets/images/AppStore.png'
import AppStore from '@/assets/images/GooglePlay.png'
import Link from 'next/link';
import Navigation from './components/Navigation';

const fontPage = SFPro({
    src: '../fonts/SF-Pro.ttf',
    display: 'swap',
})

export const metadata = {
    title: 'Exclusive',
}

export default function RootLayout({ children }) {

    const options = [
        {
            icon: <User />,
            label: "Manager my account",
            link: "#"
        },
        {
            icon: <ShoppingBagIcon />,
            label: "My Order",
            link: "#"
        },
        {
            icon: <XCircle />,
            label: "My Cancellations",
            link: "#"
        },
        {
            icon: <Star />,
            label: "My Reviews",
            link: "#"
        },
        {
            icon: <LogOut />,
            label: "Logout",
            link: "#"
        },
    ]

    return (
        <html lang="en">
            <body className={fontPage.className}>
                <div className="flex flex-col min-h-screen relative">
                    <div className="bg-black">
                        <div className="container">
                            <div className=" text-white h-12 flex items-center text-center text-[14px]">
                                <div className="flex-1">
                                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                                    <a href="#" className="font-bold underline mx-2">ShopNow</a>
                                </div>
                                <select name="" id="" className="bg-transparent focus:outline-0">
                                    <option value="" className="text-black">English</option>
                                    <option value="" className="text-black">Vietnamese</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mt-10 mb-4 flex items-center justify-between">
                            <Link href={'/'} className="font-bold text-2xl">Exclusive</Link>
                            <Navigation />
                            <div className="flex justify-between items-center">
                                <div className="relative mr-7 block">
                                    <input type="text" className='bg-secondary-1 py-[7px] pl-5 focus:outline-0 text-sm rounded-l-[4px]' placeholder="What are you looking for ?" />
                                    <button className='absolute top-[50%] translate-y-[-50%] bg-secondary-1 h-full pr-3 rounded-r-[4px]'>
                                        <Search size={18} />
                                    </button>
                                </div>
                                <button className='ml-6 mr-4'>
                                    <Heart size={24} />
                                </button>
                                <button>
                                    <Link href={'/cart'}>
                                        <ShoppingCart size={24} />
                                    </Link>
                                </button>
                                {/* Account dropdown with account */}
                                <Dropdown options={options} className="ml-4">
                                    <User size={22} />
                                </Dropdown>
                                {/* ============================ */}

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex-1">
                        {children}
                    </div>

                    {/* FOOTER */}
                    <footer className='bg-black text-text-1 font-light text-sm'>
                        <div className="container mt-[80px] mb-[60px]">
                            <div className="flex">
                                <ul className='space-y-6 w-full'>
                                    <li className='font-bold text-[24px]'>Exclusive</li>
                                    <li className='font-medium text-[20px]'>Subscribe</li>
                                    <li className='text-[16px]'>Get 10% off your first order</li>
                                    <li>
                                        <div className="relative inline-block">
                                            <input type="text" className='bg-transparent border rounded-[4px] focus:outline-0 py-3 pl-4' placeholder='Enter your email' />
                                            <button className='absolute right-0 top-[50%] translate-y-[-50%] pr-[15px]'>
                                                <SendHorizontal size={18} />
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                                <ul className='space-y-6 w-full'>
                                    <li className='font-medium text-[20px]'>Support</li>
                                    <li className='text-[16px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                                    <li className='text-[16px]'>exclusive@gmail.com</li>
                                    <li className='text-[16px]'>+88015-88888-9999</li>
                                </ul>
                                <ul className='space-y-6 w-full'>
                                    <li className='font-medium text-[20px]'>Account</li>
                                    <li className='text-[16px]'>My Account</li>
                                    <li className='text-[16px]'>Login / Register</li>
                                    <li className='text-[16px]'>Card</li>
                                    <li className='text-[16px]'>Wishlist</li>
                                    <li className='text-[16px]'>Shop</li>
                                </ul>
                                <ul className='space-y-6 w-full'>
                                    <li className='font-medium text-[20px]'>Quick Link</li>
                                    <li className='text-[16px]'>Privacy Policy</li>
                                    <li className='text-[16px]'>Terms Of Use</li>
                                    <li className='text-[16px]'>FAQ</li>
                                    <li className='text-[16px]'>Contact</li>
                                </ul>
                                <ul className='w-full'>
                                    <li className='font-medium text-[20px]'>Download App</li>
                                    <li className='text-[12px] font-medium text-text-2 mt-6'>Save $3 with App New User Only</li>
                                    <li className='flex mt-2'>
                                        <Image src={QRCode} alt='QR Code' width={80} height={80} />
                                        <div className="mx-2">
                                            <Image src={AppStore} alt='QR Code' width={110} height={40} />
                                            <Image src={GGPlay} alt='QR Code' width={110} height={40} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center justify-center mt-3 mb-6 text-text-2">
                            <span className='mr-2'><Copyright size={16} /></span>
                            <span>Copyright sxnd 2025. All right reserved</span>
                        </div>
                    </footer>
                    {/* ============ */}


                    {/* Button BackToTop */}
                    <div className={`fixed bottom-8 right-8 z-50`}>
                        <BackToTop />
                    </div>
                    {/* ================ */}
                </div>
            </body>
        </html>
    );
}
