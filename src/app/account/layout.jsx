import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/Breadcrumb";

export default function layout({ children }) {
  return (
    <div className="container mt-10 md:mt-20 mb-20 md:mb-36">
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <Breadcrumb >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink disabled>My Account</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center space-x-2">
          <span className="text-base">Welcome !</span>
          <span className="text-secondary-3">sxnd</span>
        </div>
      </div>
      {children}
    </div>
  )
}
