import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-5 mt-[60px] mr-[135px] mb-[140px] place-items-center">
        <div className="col-span-3 row-span-5">
          <Image src={'/assets/images/signup_thumb.png'} alt="Sign Up Thumb" width={1920} height={1080} />
        </div>
        <div className="col-span-2 row-span-5 col-start-4 w-full">
          <div className="ml-[129px]">
            <div className="font-medium text-[36px] mb-6 tracking-widest">Create an account</div>
            <p className="text-[16px] mb-12">Enter your detail below</p>
            <form className="flex flex-col space-y-[40px] mb-8" action="" method="POST">
              <input className="focus:outline-0 border-b-2 border-b-text-2" placeholder="Name" type="text" />
              <input className="focus:outline-0 border-b-2 border-b-text-2" placeholder="Email Or Phone Number" type="text" />
              <input className="focus:outline-0 border-b-2 border-b-text-2" placeholder="Password" type="password" />
              <Button name={"Create Account"} />
              <Button variant="outline" name={"Sign Up with Google"} >
                <Image className="mr-4" src={'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'} alt="Google Icon" width={24} height={24} />
              </Button>
            </form>
            <div className="flex items-center justify-center">
              <span className="text-[16px] text-text-2">Already have account ?</span>
              <Link href={'#'} className="font-medium text-[16px] text-text-2 ml-4 hover:underline">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
