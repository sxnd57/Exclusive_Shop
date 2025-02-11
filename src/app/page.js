import Image from "next/image";
import Category from "./components/Category";
import { Camera, Computer, Gamepad, Headphones, Monitor, MoveLeft, MoveRight, Phone, ShieldCheck, Smartphone, Truck, Watch } from "lucide-react";
import ProductCard from "./components/ProductCard";
import Section from "./components/Section";
import SliderCard from "./components/SliderCard";
import Carousel from "./components/Carousel";
import Button from "./components/Button";
import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import Lady from '@/assets/images/lady.png'
import PlayStation from '@/assets/images/playstation.png'
import Speaker from '@/assets/images/speaker.png'
import Perfume from '@/assets/images/perfume.png'
import Thumbnail from '@/assets/images/thumbnail.png'

const categories = [
   {
      id: 1,
      title: "Woman's Fashion",
      subcategories: ["Clothing", "Shoes", "Jewelry", "Watches", "Handbags"]
   },
   {
      id: 2,
      title: "Men's Fashion",
      subcategories: ["Clothing", "Shoes", "Watches", "Accessories"]
   },
   {
      id: 3,
      title: "Electronics",
      subcategories: ["Smartphones", "Laptops", "Tablets", "Cameras", "Audio"]
   },
   {
      id: 4,
      title: "Home & Lifestyle",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting"]
   },
   {
      id: 5,
      title: "Medicine",
      subcategories: ["Prescription", "Over-the-Counter", "First Aid", "Vitamins"]
   },
   {
      id: 6,
      title: "Sports & Outdoor",
      subcategories: ["Exercise Equipment", "Outdoor Recreation", "Sports Gear"]
   },
   {
      id: 7,
      title: "Baby's & Toys",
      subcategories: ["Baby Clothing", "Baby Care", "Toys", "Baby Gear"]
   },
   {
      id: 8,
      title: "Groceries & Pets",
      subcategories: ["Food", "Beverages", "Pet Food", "Pet Supplies"]
   },
   {
      id: 9,
      title: "Health & Beauty",
      subcategories: []
   }
];

const urlSlideThumbs = [...Array(5)].map(() => `https://picsum.photos/800/400?random=${Math.floor(Math.random() * 1000)}`);
const urlProducts = [...Array(10)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);
const urlProducts1 = [...Array(10)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);
const urlProducts2 = [...Array(10)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);
const urlProducts3 = [...Array(10)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);

export default function Home() {
   return (
      <>
         <div className="container mb-[140px]">
            <div className="flex">
               <div className="w-1/6 border-r-2 pt-10 px-4">
                  <Category categories={categories} />
               </div>
               <div className="flex-1">
                  <div className="pt-10 pl-11">
                     <Carousel duration={10000} navigation>
                        {urlSlideThumbs.map((url, i) => (
                           <Image
                              key={i}
                              src={url}
                              alt={`slide ${i + 1}`}
                              className="w-full h-[400px] object-cover"
                              width={1920}
                              height={1080}
                              priority
                           />
                        ))}
                     </Carousel>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <Section name={"Today's"} />
            <div className="flex items-end justify-between mt-4">
               <div className="font-bold text-[36px]">Flash Sales</div>
               <div className="font-bold flex space-x-4 ml-[87px]">
                  <div className="days flex flex-col">
                     <span className="text-[12px]">Days</span>
                     <span className="text-[32px]">
                        <span>03</span>
                        <span className="text-secondary-3 ml-2">:</span>
                     </span>
                  </div>
                  <div className="hours flex flex-col">
                     <span className="text-[12px]">Hours</span>
                     <span className="text-[32px]">
                        <span>23</span>
                        <span className="text-secondary-3 ml-2">:</span>
                     </span>
                  </div>
                  <div className="minutes flex flex-col">
                     <span className="text-[12px]">Minutes</span>
                     <span className="text-[32px]">
                        <span>12</span>
                        <span className="text-secondary-3 ml-2">:</span>
                     </span>
                  </div>
                  <div className="seconds flex flex-col">
                     <span className="text-[12px]">Seconds</span>
                     <span className="text-[32px]">
                        <span>03</span>
                     </span>
                  </div>
               </div>
               <div className="font-bold text-[36px] flex-1 text-end self-center space-x-4">
                  <button target-data="btnPrev" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveLeft size={16} />
                  </button>
                  <button target-data="btnNext" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveRight size={16} />
                  </button>
               </div>
            </div>
            <div className="mt-10 mb-20">
               <SliderCard itemsToShow={5} nextSlide="btnNext" prevSlide="btnPrev">
                  {urlProducts.map((url, i) => (
                     <div key={i}>
                        <ProductCard
                           image={url}
                           name="Apple Watch Series 6"
                           price={399}
                           discount={499}
                           sales={'40%'}
                           productDetail="/product-detail"
                        />
                     </div>
                  ))}
               </SliderCard>
            </div>
         </div>

         <div className="container flex justify-center">
            <Button name={"View All Products"} />
         </div>

         <div className="container mt-[60px] mb-[80px]">
            <hr />
         </div>

         <div className="container ">
            <Section name={"Categories"} />
            <div className="flex items-center justify-between mt-4 mb-10">
               <div className="font-bold text-[36px]">Browse By Category</div>
               <div className="font-bold text-[36px] flex-1 text-end self-center space-x-4">
                  <button target-data="btnPrev2" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveLeft size={16} />
                  </button>
                  <button target-data="btnNext2" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveRight size={16} />
                  </button>
               </div>
            </div>
            <SliderCard itemsToShow={6} nextSlide={'btnNext2'} prevSlide={'btnPrev2'} duration={3000}>
               <Link href="#">
                  <CategoryCard name={"Phone"}>
                     <Smartphone size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Computer"}>
                     <Monitor size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Watch"}>
                     <Watch size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Phone"}>
                     <Headphones size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Gaming"}>
                     <Gamepad size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Camera"}>
                     <Camera size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Camera"}>
                     <Camera size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
               <Link href="#">
                  <CategoryCard name={"Camera"}>
                     <Camera size={56} strokeWidth={1} />
                  </CategoryCard>
               </Link>
            </SliderCard>
         </div>

         <div className="container mt-[70px] mb-[80px]">
            <hr />
         </div>

         <div className="container mb-10">
            <Section name={"This Month"} />
            <div className="flex items-end justify-between mt-4">
               <div className="font-bold text-[36px]">Best Selling Products</div>
               <Button name={"View All"} className={'font-light text-sm'} />
            </div>
            <div className="mt-10 mb-20">
               <SliderCard itemsToShow={5}>
                  {urlProducts1.map((url, i) => (
                     <div key={i}>
                        <ProductCard
                           image={url}
                           name="Apple Watch Series 6"
                           price={399}
                           discount={499}
                           sales={'40%'}
                           productDetail="/product-detail"
                        />
                     </div>
                  ))}
               </SliderCard>
            </div>
         </div>

         <div className="container my-20">
            <Link href="#">
               <Image src={Thumbnail} className="w-full" alt="Product" width={1920} height={1080} />
            </Link>
         </div>

         <div className="container mb-10">
            <Section name={"Our Products"} />
            <div className="flex items-end justify-between mt-4">
               <div className="font-bold text-[36px]">Explore Our Products</div>
               <div className="font-bold text-[36px] flex-1 text-end self-center space-x-4">
                  <button target-data="btnPrev1" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveLeft size={16} />
                  </button>
                  <button target-data="btnNext1" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveRight size={16} />
                  </button>
               </div>
            </div>
            <div className="mt-10 mb-20">
               <SliderCard itemsToShow={5} nextSlide="btnNext1" prevSlide="btnPrev1">
                  {urlProducts2.map((url, i) => (
                     <div key={i}>
                        <ProductCard
                           image={url}
                           name="Apple Watch Series 6"
                           price={399}
                           discount={499}
                           sales={'40%'}
                           productDetail="/product-detail"
                        />
                     </div>
                  ))}
               </SliderCard>
               <SliderCard itemsToShow={5} nextSlide="btnNext1" prevSlide="btnPrev1">
                  {urlProducts3.map((url, i) => (
                     <div key={i}>
                        <ProductCard
                           image={url}
                           name="Apple Watch Series 6"
                           price={399}
                           discount={499}
                           sales={'40%'}
                           productDetail="/product-detail"
                        />
                     </div>
                  ))}
               </SliderCard>
            </div>
         </div>

         <div className="container mt-[60px] mb-[80px]">
            <hr />
         </div>

         <div className="container mb-10">
            <Section name={"Featured"} />
            <div className="flex items-end justify-between mt-4">
               <div className="font-bold text-[36px]">New Arrival</div>
            </div>
            <div className="grid grid-cols-12 grid-rows-6 gap-[30px]">
               <div className="col-span-6 row-span-6">
                  <Image src={PlayStation} className="w-full h-full" alt="Product" width={1920} height={1080} />
               </div>
               <div className="col-span-3 row-span-3 col-start-7 row-start-4">
                  <Image src={Speaker} className="w-full h-full" alt="Product" width={1920} height={1080} />
               </div>
               <div className="col-span-6 row-span-3 col-start-7 row-start-1">
                  <Image src={Lady} className="w-full h-full" alt="Product" width={1920} height={1080} />
               </div>
               <div className="col-span-3 row-span-3 col-start-10 row-start-4">
                  <Image src={Perfume} className="w-full h-full" alt="Product" width={1920} height={1080} />
               </div>
            </div>
         </div>

         <div className="container">
            <div className="m-[140px] mx-28">
               <div className="flex items-center justify-between">
                  <div className="text-center">
                     <div className="bg-black p-4 border-[11px] border-primary rounded-full text-white inline-block mb-6">
                        <Truck size={40} strokeWidth={1} />
                     </div>
                     <h3 className="font-semibold text-[20px] mb-2">FREE AND FAST DELIVERY</h3>
                     <p className="text-sm">Free delivery for all orders over $140</p>
                  </div>
                  <div className="text-center">
                     <div className="bg-black p-4 border-[11px] border-primary rounded-full text-white inline-block mb-6">
                        <Headphones size={40} strokeWidth={1} />
                     </div>
                     <h3 className="font-semibold text-[20px] mb-2">24/7 CUSTOMER SERVICE</h3>
                     <p className="text-sm">Friendly 24/7 customer support</p>
                  </div>
                  <div className="text-center">
                     <div className="bg-black p-4 border-[11px] border-primary rounded-full text-white inline-block mb-6">
                        <ShieldCheck size={40} strokeWidth={1} />
                     </div>
                     <h3 className="font-semibold text-[20px] mb-2">MONEY BACK GUARANTEE</h3>
                     <p className="text-sm">We reurn money within 30 days</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
