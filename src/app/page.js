import Image from "next/image";
import Category from "./components/Category";
import { MoveLeft, MoveRight } from "lucide-react";
import ProductCard from "./components/ProductCard";
import Section from "./components/Section";
import SliderCard from "./components/SliderCard";
import Carousel from "./components/Carousel";
import Button from "./components/Button";

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
            <div className="flex items-center justify-between mt-4">
               <div className="font-bold text-[36px]">Browse By Category</div>
               <div className="font-bold text-[36px] flex-1 text-end self-center space-x-4">
                  <button className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveLeft size={16} />
                  </button>
                  <button className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                     <MoveRight size={16} />
                  </button>
               </div>
            </div>
         </div>

         <div className="container mt-[60px] mb-[80px]">
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
            <Section name={"Our Products"} />
            <div className="font-bold text-[36px] flex-1 text-end self-center space-x-4">
               <button target-data="btnPrev1" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                  <MoveLeft size={16} />
               </button>
               <button target-data="btnNext1" className="rounded-full bg-secondary-1 p-2 hover:bg-secondary-2">
                  <MoveRight size={16} />
               </button>
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
         </div>
      </>
   );
}
