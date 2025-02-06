'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SliderCard({ children, duration = 5000, itemsToShow = 5, nextSlide, prevSlide }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = Array.isArray(children) ? children : [children]

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides.length * 2))
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % (slides.length))
  }

  useEffect(() => {
    const timer = setInterval(handleNextSlide, duration)
    return () => clearInterval(timer)
  }, [duration])

  useEffect(() => {
    const nextButton = document.querySelector(`[target-data="${nextSlide}"]`)
    const prevButton = document.querySelector(`[target-data="${prevSlide}"]`)

    if (nextButton) nextButton.addEventListener('click', handleNextSlide)
    if (prevButton) prevButton.addEventListener('click', handlePrevSlide)

    return () => {
      if (nextButton) nextButton.removeEventListener('click', handleNextSlide)
      if (prevButton) prevButton.removeEventListener('click', handlePrevSlide)
    }
  }, [nextSlide, prevSlide])

  const getTranslateX = () => {
    const baseTranslate = currentSlide * (100 / itemsToShow)
    if (currentSlide >= slides.length) {
      setCurrentSlide(0)
      return 0
    }
    return baseTranslate
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex gap-5 transition-transform duration-500 ease-out`}
          style={{ transform: `translateX(-${getTranslateX()}%)` }}
        >
          {[...slides, ...slides].map((slide, index) => (
            <div key={index} className={`flex-shrink-0 h-full`} style={{ width: `calc(${100 / itemsToShow}% - 19px)` }}>
              <div className="rounded-md overflow-hidden">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}