import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import Section from '../components/Section';

export default function page() {

  const urlProducts = [...Array(5)].map(() => `https://picsum.photos/270/250?random=${Math.floor(Math.random() * 1000)}`);

  return (
    <>
      <div className="container mt-20">
        <div className="flex items-center justify-between mb-[60px]">
          <div className="text-[16px]">Wishlist(4)</div>
          <Button variant="outline">
            <Link href="#">Move All To Bag</Link>
          </Button>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-5 gap-4">
            {urlProducts.map((url, i) => (
              <div key={i}>
                <ProductCard
                  image={url}
                  name="Apple Watch Series 6"
                  price={399}
                  discount={499}
                  sales={'40%'}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mb-[60px]">
          <Section name={"Just For You"} />
          <Button variant="outline">
            <Link href="#">See All</Link>
          </Button>
        </div>
        <div className="mb-20">
          <div className="grid grid-cols-5 gap-4">
            {urlProducts.map((url, i) => (
              <div key={i}>
                <ProductCard
                  image={url}
                  name="Apple Watch Series 6"
                  price={399}
                  discount={499}
                  sales={'40%'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
