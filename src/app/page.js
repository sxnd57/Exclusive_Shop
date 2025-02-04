import Image from "next/image";
import Carousel from "./components/Carousel";
import Category from "./components/Category";

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
const urlSlideThumb = ['https://picsum.photos/800/400?random=${Math.floor(Math.random() * 100)}']

export default function Home() {
   return (
      <>
         <div className="container">
            <div className="flex">
               <div className="w-1/6 border-r-2 pt-10 px-4">
                  <Category categories={categories} />
               </div>
               <div className="flex-1">
                  <div className="pt-10 pl-11">
                     <Carousel duration={10000}>
                        {[...Array(5)].map((_, i) => (
                           <Image
                              key={i}
                              src={urlSlideThumb[0]}
                              alt={`slide ${i + 1}`}
                              className="w-full h-[400px] object-cover"
                              width={1920}
                              height={1080}
                              priority
                              quality={75}
                           />
                        ))}
                     </Carousel>
                  </div>
               </div>
            </div>
         </div>
         <div className="container my-[140px]">
            <div className="flex items-center">
               <div className="w-3 h-7 bg-secondary-3"></div>
               <span className="font-bold ml-2">Today</span>
            </div>
         </div>
      </>
   );
}
