import React, { useRef, useState } from 'react'
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import Nepal from '../assets/Nepal.jpg'
import Venice from '../assets/Venice.jpg'
import next from '../assets/next.png'
import back from '../assets/back.png'
import { Clock, Star, X, MapPin, Calendar, Users, Wifi, Coffee, Ship, Mountain, Landmark, User, Mail, Phone, MessageSquare, CreditCard, Calendar as CalendarIcon } from 'lucide-react'

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const FeatureDestination = () => {
  const swiperRef = useRef(null)
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    numberOfGuests: '1',
    specialRequests: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const destinationJson = [
    { name: 'Bali', img: Bali, time: '6 Days - 5 Nights', star: '4.8 (12 reviews)', price: '69,999' },
    { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '4.6 (14 reviews)', price: '59,999' },
    { name: 'Tokyo', img: Tokyo, time: '6 Days - 5 Nights', star: '4.7 (17 reviews)', price: '79,999' },
    { name: 'Nepal', img: Nepal, time: '6 Days - 5 Nights', star: '4.5 (10 reviews)', price: '49,999' },
    { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '4.7 (12 reviews)', price: '89,999' },
  ]

  const destinationDetails = {
    Bali: {
      fullDescription: "Bali, known as the Island of the Gods, offers stunning beaches, vibrant culture, and lush rice terraces. Experience traditional Balinese dances, visit ancient temples, and enjoy world-class surfing.",
      highlights: ["Uluwatu Temple", "Tegalalang Rice Terraces", "Mount Batur Sunrise Trek", "Seminyak Beaches"],
      bestTimeToVisit: "April to October (Dry Season)",
      languages: "Indonesian, Balinese",
      currency: "Indonesian Rupiah (IDR)",
      activities: ["Surfing", "Yoga Retreats", "Temple Tours", "Snorkeling"],
      mapLink: "https://maps.google.com/?q=Bali"
    },
    Venice: {
      fullDescription: "Venice, the floating city, is built on 118 small islands connected by canals and bridges. Experience romantic gondola rides, stunning Renaissance architecture, and delicious Italian cuisine.",
      highlights: ["St. Mark's Square", "Grand Canal", "Rialto Bridge", "Doge's Palace"],
      bestTimeToVisit: "April to June, September to October",
      languages: "Italian",
      currency: "Euro (EUR)",
      activities: ["Gondola Rides", "Glass Blowing", "Museum Tours", "Canal Cruises"],
      mapLink: "https://maps.google.com/?q=Venice"
    },
    Tokyo: {
      fullDescription: "Tokyo seamlessly blends ultramodern with traditional. From neon-lit skyscrapers to historic temples, this city offers unique experiences from sushi making to anime culture.",
      highlights: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Tower", "Akihabara"],
      bestTimeToVisit: "March to April (Cherry Blossoms), October to November",
      languages: "Japanese",
      currency: "Japanese Yen (JPY)",
      activities: ["Sushi Making", "Temple Visits", "Shopping", "Robot Shows"],
      mapLink: "https://maps.google.com/?q=Tokyo"
    },
    Nepal: {
      fullDescription: "Nepal, home to the Himalayas and Mount Everest, offers breathtaking mountain views, rich Buddhist culture, and amazing trekking opportunities.",
      highlights: ["Mount Everest Base Camp", "Pashupatinath Temple", "Patan Durbar Square", "Pokhara Valley"],
      bestTimeToVisit: "September to November, March to May",
      languages: "Nepali",
      currency: "Nepalese Rupee (NPR)",
      activities: ["Trekking", "Mountain Flights", "Temple Tours", "Paragliding"],
      mapLink: "https://maps.google.com/?q=Nepal"
    },
    Paris: {
      fullDescription: "Paris, the City of Light, is famous for its art, fashion, gastronomy, and culture. Visit iconic landmarks, world-class museums, and charming cafés.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées"],
      bestTimeToVisit: "April to June, September to October",
      languages: "French",
      currency: "Euro (EUR)",
      activities: ["Museum Tours", "Seine River Cruises", "Wine Tasting", "Fashion Shopping"],
      mapLink: "https://maps.google.com/?q=Paris"
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    // Travel Date validation
    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required'
    } else {
      const selectedDate = new Date(formData.travelDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.travelDate = 'Travel date cannot be in the past'
      }
    }
    
    // Number of guests validation
    if (!formData.numberOfGuests) {
      newErrors.numberOfGuests = 'Number of guests is required'
    } else if (parseInt(formData.numberOfGuests) < 1) {
      newErrors.numberOfGuests = 'At least 1 guest is required'
    } else if (parseInt(formData.numberOfGuests) > 20) {
      newErrors.numberOfGuests = 'Maximum 20 guests allowed'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBookNow = () => {
    setShowBookingForm(true)
  }

  const handleSubmitBooking = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        setSubmitMessage({
          type: 'success',
          text: `✅ Booking confirmed for ${selectedDestination}! We'll send details to ${formData.email}`
        })
        
        // Reset form after 3 seconds and close
        setTimeout(() => {
          setShowBookingForm(false)
          setShowModal(false)
          setSubmitMessage(null)
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            travelDate: '',
            numberOfGuests: '1',
            specialRequests: ''
          })
          setErrors({})
          setIsSubmitting(false)
        }, 3000)
      }, 1500)
    }
  }

  const handleLearnMore = (destination) => {
    setSelectedDestination(destination)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedDestination(null)
    setShowBookingForm(false)
    setSubmitMessage(null)
    setErrors({})
  }

  const getActivityIcon = (activity) => {
    const activityLower = activity.toLowerCase()
    if (activityLower.includes('surf') || activityLower.includes('snorkel')) return <Waves size={18} />
    if (activityLower.includes('temple') || activityLower.includes('museum')) return <Landmark size={18} />
    if (activityLower.includes('trek') || activityLower.includes('mountain')) return <Mountain size={18} />
    if (activityLower.includes('gondola') || activityLower.includes('cruise')) return <Ship size={18} />
    return <Coffee size={18} />
  }

  return (
    <>
      <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 relative'>
          <h2 className='text-3xl font-bold text-center mb-3 font-serif'>
            Featured Destinations
          </h2>
          <hr className='w-[200px] bg-red-500 mx-auto h-1 mb-10' />
          
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <img src={back} alt="" className="w-6 h-6" />
          </button>

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {destinationJson.map((destination) => (
              <SwiperSlide key={destination.name}>
                <div className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg bg-white h-full transition-transform hover:scale-105 duration-300'>
                  <img
                    src={destination.img}
                    alt={destination.name}
                    className='object-cover w-full h-48 hover:scale-110 transition-all duration-300'
                  />
                  <div className='p-4'>
                    <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'>
                      <Clock size={15} />
                      {destination.time}
                    </p>
                    <h3 className='text-xl font-bold mb-2'>
                      {destination.name}
                    </h3>
                    <p className='flex gap-1 items-center'>
                      <Star size={18} className="fill-red-500 text-red-500" />
                      {destination.star}
                    </p>
                    <p className='text-gray-600 mb-4 mt-2'>
                      Experience the beauty and culture of {destination.name}
                    </p>
                    <div className='flex gap-4'>
                      <button className='px-3 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition'>
                        ${destination.price}
                      </button>
                      <button 
                        onClick={() => handleLearnMore(destination.name)}
                        className='px-3 py-2 bg-black rounded-md text-white hover:bg-gray-800 transition'
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            <img src={next} alt="" className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Main Modal with Destination Details */}
      {showModal && selectedDestination && !showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            >
              <X size={24} />
            </button>

            <div className="relative h-64 md:h-96">
              <img
                src={destinationJson.find(d => d.name === selectedDestination)?.img}
                alt={selectedDestination}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedDestination}</h2>
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span>{destinationDetails[selectedDestination]?.rating || '4.7'} (500+ reviews)</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">About {selectedDestination}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {destinationDetails[selectedDestination]?.fullDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">Top Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destinationDetails[selectedDestination]?.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <MapPin size={18} className="text-red-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">Popular Activities</h3>
                <div className="flex flex-wrap gap-3">
                  {destinationDetails[selectedDestination]?.activities.map((activity, idx) => (
                    <span key={idx} className="px-3 py-2 bg-gray-100 rounded-full text-sm flex items-center gap-2">
                      {getActivityIcon(activity)}
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Best Time to Visit</p>
                  <p className="font-semibold flex items-center gap-2">
                    <Calendar size={18} />
                    {destinationDetails[selectedDestination]?.bestTimeToVisit}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Languages</p>
                  <p className="font-semibold">{destinationDetails[selectedDestination]?.languages}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Currency</p>
                  <p className="font-semibold">{destinationDetails[selectedDestination]?.currency}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t">
                <div className="text-center sm:text-left">
                  <p className="text-gray-500">Starting from</p>
                  <p className="text-3xl font-bold text-red-500">
                    ${destinationJson.find(d => d.name === selectedDestination)?.price}
                  </p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handleBookNow}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                  >
                    Book Now
                  </button>
                  <a 
                    href={destinationDetails[selectedDestination]?.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-semibold text-center"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Book Your Trip to {selectedDestination}</h2>
                <p className="text-gray-600">Fill in your details to confirm your booking</p>
              </div>

              {submitMessage && (
                <div className={`mb-4 p-4 rounded-lg ${
                  submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmitBooking}>
                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Travel Date */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <CalendarIcon size={16} className="inline mr-2" />
                    Preferred Travel Date *
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.travelDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.travelDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>
                  )}
                </div>

                {/* Number of Guests */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Users size={16} className="inline mr-2" />
                    Number of Guests *
                  </label>
                  <select
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.numberOfGuests ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                  {errors.numberOfGuests && (
                    <p className="text-red-500 text-sm mt-1">{errors.numberOfGuests}</p>
                  )}
                </div>

                {/* Special Requests */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Any dietary restrictions, room preferences, or special requirements?"
                  />
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>Package Price</span>
                    <span className="font-semibold">${destinationJson.find(d => d.name === selectedDestination)?.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>× {formData.numberOfGuests} Guest(s)</span>
                    <span className="font-semibold">
                      ${(parseInt(destinationJson.find(d => d.name === selectedDestination)?.price.replace(/,/g, '')) * parseInt(formData.numberOfGuests)).toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total Amount</span>
                      <span className="text-red-500 text-xl">
                        ${(parseInt(destinationJson.find(d => d.name === selectedDestination)?.price.replace(/,/g, '')) * parseInt(formData.numberOfGuests)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Waves = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12c2-2 4-3 6-3s4 1 6 3 4 3 6 3 4-1 6-3" />
    <path d="M2 16c2-2 4-3 6-3s4 1 6 3 4 3 6 3 4-1 6-3" />
    <path d="M2 8c2-2 4-3 6-3s4 1 6 3 4 3 6 3 4-1 6-3" />
  </svg>
)

export default FeatureDestination