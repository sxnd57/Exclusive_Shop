import { ChevronRight } from "lucide-react";

export default function Category({ children, categories }) {
  return (
    <>
      <ul className="space-y-4 cursor-pointer">
        {categories.map((category, index) => (
          <li key={index} className="relative group">
            <div className="flex justify-between items-center hover:text-secondary-3">
              <span>{category.title}</span>
              {category.subcategories && category.subcategories.length > 0 ? <ChevronRight size={16} /> : null}
            </div>
            {category.subcategories && category.subcategories.length > 0 ?
              <ul className="absolute left-full top-0 space-y-2 bg-white shadow-2xl p-3 rounded-md hidden group-hover:block min-w-[200px] z-[99999]">
                {category.subcategories && category.subcategories.map((subcategory, index) => (
                  <li key={index} className="hover:bg-secondary-1 p-1 rounded-sm">{subcategory}</li>
                ))}
              </ul>
              : null}
          </li>
        ))}
      </ul>
    </>
  )
}
