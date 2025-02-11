import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/Breadcrumb";

export default function layout({ children }) {
  return (
    <div className="container mt-10 md:mt-20 mb-20 md:mb-36">
      <Breadcrumb className="mb-20">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={'#'}>Gaming</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink disabled>PS5 Controller</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  )
}
