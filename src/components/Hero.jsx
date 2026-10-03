import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import banner1 from '../assets/Hero1.jpg'
import banner2 from '../assets/Hero3.jpg'
import banner3 from '../assets/Hero4.jpg'

import { Search } from 'lucide-react'

const slides = [
  {
    img: banner1,
    title: "Discover Your Next Adventure",
    desc: "Explore breathtaking destinations, create unforgettable memories and embark on the journey of a lifetime."
  },
  {
    img: banner2,
    title: "Explore the World With Ease",
    desc: "Find the best travel deals and plan your perfect holiday experience with us."
  },
  {
    img: banner3,
    title: "Travel Beyond Limits",
    desc: "Make every journey unforgettable with amazing destinations and experiences."
  }
]

const Hero = () => {

  const [message, setMessage] = useState("")
  const [location, setLocation] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guest, setGuest] = useState("")

  const handleBooking = () => {
    if (!location || !checkIn || !checkOut || !guest) {
      setMessage("⚠️ Please enter all values")
      return
    }

    setMessage("✅ Your booking has been confirmed!")
  }

  return (
    <div className="slider-container -mt-12 overflow-hidden relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >

        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[650px] lg:h-[800px] relative bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center text-center px-5">
                <div className="space-y-6">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    {item.title}
                  </h1>

                  <p className="text-white lg:text-lg lg:w-[700px] mx-auto">
                    {item.desc}
                  </p>

                  <button className="bg-red-500 px-5 py-2 text-white rounded-md font-semibold hover:bg-black transition">
                    Start Exploring
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      {/* SEARCH BOX */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-md absolute left-1/2 -translate-x-1/2 bottom-10 hidden lg:block w-[90%] max-w-5xl p-4 z-10">

        <div className="grid grid-cols-4 gap-4 items-end">

          {/* Location */}
          <div>
            <label className="flex font-semibold gap-1 items-center mb-1">
              <Search className="w-4 h-4" /> Location
            </label>
            <select
              className="border w-full p-2 rounded"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Bali">Bali</option>
              <option value="Nepal">Nepal</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Paris">Paris</option>
            </select>
          </div>

          {/* Check In */}
          <div>
            <label className="font-semibold mb-1 block">Check In</label>
            <input
              type="date"
              className="border w-full p-2 rounded"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          {/* Check Out */}
          <div>
            <label className="font-semibold mb-1 block">Check Out</label>
            <input
              type="date"
              className="border w-full p-2 rounded"
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          {/* Guest */}
          <div>
            <label className="flex font-semibold gap-1 items-center mb-1">
              <Search className="w-4 h-4" /> Guest
            </label>
            <select
              className="border w-full p-2 rounded"
              onChange={(e) => setGuest(e.target.value)}
            >
              <option value="">Select</option>
              <option value="2 Adults">2 Adults</option>
              <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
              <option value="Family">Family</option>
            </select>
          </div>

        </div>

        <div className="mt-4 text-right">

          <button
            onClick={handleBooking}
            className="bg-red-500 hover:bg-black text-white px-6 py-2 rounded-md transition"
          >
            Book Now
          </button>

          {message && (
            <p className="mt-3 font-semibold text-green-600">
              {message}
            </p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Hero