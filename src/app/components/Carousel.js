'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ children, duration = 5000, navigation = false }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = Array.isArray(children) ? children : [children]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, duration)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-out`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className='flex-shrink-0 w-full h-full'>
              <div className="rounded-md overflow-hidden">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {navigation ?
        (
          <>
            <button
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full `}
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full`}
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )
        : ''}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-secondary-3 border-2 ' : 'bg-white/50'
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}