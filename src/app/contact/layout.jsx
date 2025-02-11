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
              <BreadcrumbLink disabled>Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </div>
  )
}
