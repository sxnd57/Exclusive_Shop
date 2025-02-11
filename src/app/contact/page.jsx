import { Phone } from "lucide-react";
import Button from "../components/Button";

export default function page() {
  return (
    <>
      <div className="flex gap-[30px]">
        <div className="w-2/4">
          <div className="rounded-md shadow-md py-10 px-8">
            <div className="flex items-center mb-6 space-x-2">
              <div className="inline-block rounded-full p-2 bg-secondary-3 text-white">
                <Phone size={22} strokeWidth={1} />
              </div>
              <div className="text-base">Call To Us</div>
            </div>
            <div className="text-sm mb-4">We are available 24/7, 7 days a week.</div>
            <div className="text-sm">Phone: +8801611112222</div>
            <div className="my-8">
              <hr />
            </div>
            <div className="flex items-center mb-6 space-x-2">
              <div className="inline-block rounded-full p-2 bg-secondary-3 text-white">
                <Phone size={22} strokeWidth={1} />
              </div>
              <div className="text-base">Write To Us</div>
            </div>
            <div className="text-sm mb-4">Fill out our form and we will contact you within 24 hours.</div>
            <div className="text-sm mb-4">Emails: customer@exclusive.com</div>
            <div className="text-sm">Emails: support@exclusive.com</div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-md shadow-md py-10 px-8">
            <div className="flex items-center gap-4 text-base">
              <div className="w-1/3">
                <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder="Your Name*" />
              </div>
              <div className="w-1/3">
                <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder="Your Email*" />
              </div>
              <div className="w-1/3">
                <input name="fistname" type="text" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder="Your Phone*" />
              </div>
            </div>
            <textarea name="" id="" className="p-3 mt-3 bg-secondary-1 rounded-md focus:outline-0 w-full h-32"></textarea>
            <div className="flex justify-end">
              <Button>Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
