import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/app/components/Breadcrumb";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="container mt-10 md:mt-20 mb-20 md:mb-36">
      <div className="flex items-center justify-between md:mb-10">
        <Breadcrumb >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink disabled>404 Error</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid place-items-center">
        <div className="mb-20 text-center">
          <div className="text-[110px] font-bold">404 NOT FOUND</div>
          <div className="text-base">Your visited page not found. You may go home page.</div>
        </div>
        <Button>Back to home page</Button>
      </div>
    </div>
  )
}
