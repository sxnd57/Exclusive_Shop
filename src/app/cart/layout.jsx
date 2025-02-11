import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/Breadcrumb";

export default function layout({ children }) {
  return (
    <div className="container mt-10 md:mt-20 mb-20 md:mb-36">
      <Breadcrumb className="mb-6 md:mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={'/'} className="text-sm md:text-base">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink disabled className="text-sm md:text-base">Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  )
}
