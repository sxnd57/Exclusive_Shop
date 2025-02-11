import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

export default function page() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="w-1/3 space-y-5">
          <ul className='text-sm space-y-4'>
            <li className="font-bold text-base">Manage My Account</li>
            <li className="text-text-2 hover:text-secondary-3 ml-6 cursor-pointer">My Profile</li>
            <li className="text-text-2 hover:text-secondary-3 ml-6 cursor-pointer">Address Book</li>
            <li className="text-text-2 hover:text-secondary-3 ml-6 cursor-pointer">My Payment Options</li>
          </ul>
          <ul className='text-sm space-y-4'>
            <li className="font-bold text-base">
              <Link href={"#"}>My Orders</Link>
            </li>
            <li className="text-text-2 hover:text-secondary-3 ml-6 cursor-pointer">My Returns</li>
            <li className="text-text-2 hover:text-secondary-3 ml-6 cursor-pointer">My Cancellations</li>
          </ul>
          <ul className='text-sm space-y-4'>
            <li className="font-bold text-base">
              <Link href={"/wishlist"}>My Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="w-2/3">
          <div className="border rounded-xl shadow-md px-20 py-10 space-y-6">
            <div className="text-xl text-secondary-3 font-medium">Edit Your Profile</div>
            <div className="flex items-center justify-between gap-12">
              <div className="w-1/2">
                <label htmlFor="fistname" className="text-base">First Name</label>
                <input name="fistname" type="text" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='Md' />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastname" className="text-base">Last Name</label>
                <input name="lastname" type="text" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='Rimel' />
              </div>
            </div>
            <div className="flex items-center justify-between gap-12">
              <div className="w-1/2">
                <label htmlFor="email" className="text-base">Email</label>
                <input name="email" type="email" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='rimel1111@gmail.com' />
              </div>
              <div className="w-1/2">
                <label htmlFor="address" className="text-base">Address</label>
                <input name="address" type="text" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='Kingston, 5236, United State' />
              </div>
            </div>
            <div className="flex items-center justify-between gap-12">
              <div className="w-full space-y-4">
                <label htmlFor="email" className="text-base">Password Changes</label>
                <input name="email" type="email" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='Current Password' />
                <input name="email" type="email" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='New Password' />
                <input name="email" type="email" className="p-3 mt-2 bg-secondary-1 rounded-md focus:outline-0 w-full" placeholder='Confirm New Password' />
              </div>
            </div>
            <div className='flex items-center justify-end space-x-8'>
              <Button variant='default'>Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
