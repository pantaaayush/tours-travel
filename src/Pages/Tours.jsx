import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../Components/TopBanner'
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import Nepal from '../assets/Nepal.jpg'
import Venice from '../assets/Venice.jpg'
import { Clock, Star, MapPin, Calendar, Users, X, Mail, Phone, User, Send } from 'lucide-react'

const Tours = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2',
    specialRequests: ''
  })

  const destinationJson = [
    { 
      name: 'Bali, Indonesia', 
      img: Bali, 
      time: '5 Days - 4 Nights', 
      star: '4.8', 
      reviews: '12 reviews', 
      price: '69,999',
      description: 'Experience the beauty and culture of Bali with pristine beaches and ancient temples.'
    },
    { 
      name: 'Venice, Italy', 
      img: Venice, 
      time: '5 Days - 4 Nights', 
      star: '4.7', 
      reviews: '12 reviews', 
      price: '79,999',
      description: 'Cruise through the romantic canals of Venice and experience Italian charm.'
    },
    { 
      name: 'Tokyo, Japan', 
      img: Tokyo, 
      time: '6 Days - 5 Nights', 
      star: '4.9', 
      reviews: '15 reviews', 
      price: '89,999',
      description: 'Immerse yourself in the vibrant culture of Tokyo, where tradition meets innovation.'
    },
    { 
      name: 'Nepal', 
      img: Nepal, 
      time: '7 Days - 6 Nights', 
      star: '4.6', 
      reviews: '10 reviews', 
      price: '59,999',
      description: 'Conquer the peaks with our guided adventures through the Himalayas.'
    },
    { 
      name: 'Paris, France', 
      img: Paris, 
      time: '5 Days - 4 Nights', 
      star: '4.9', 
      reviews: '20 reviews', 
      price: '84,999',
      description: 'Experience the magic of the City of Light from the iconic Eiffel Tower.'
    },
    { 
      name: 'Tokyo, Japan', 
      img: Tokyo, 
      time: '6 Days - 5 Nights', 
      star: '4.9', 
      reviews: '15 reviews', 
      price: '89,999',
      description: 'Immerse yourself in the vibrant culture of Tokyo, where tradition meets innovation.'
    },
  ]

  // Form handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const openBookingModal = (tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setSubmitted(false)
        setIsModalOpen(false)
        setSelectedTour(null)
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelDate: '',
          travelers: '2',
          specialRequests: ''
        })
      }, 2000)
    }, 1500)
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    return stars
  }

  return (
    <>
      <TopBanner text='Our Tours' />
      
      <div className='max-w-7xl mx-auto my-10 px-4 md:px-0'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl lg:text-5xl font-serif font-bold text-gray-800'>
            Top Destinations
          </h1>
          <p className='text-gray-500 mt-2'>Explore our curated selection of amazing travel destinations</p>
          <div className='w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Tours Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {destinationJson.map((destination, index) => (
            <div 
              key={index} 
              className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
            >
              {/* Image Container */}
              <div className='relative overflow-hidden'>
                <img
                  src={destination.img}
                  alt={destination.name}
                  className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700'
                />
                {/* Price Badge */}
                <div className='absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg'>
                  ₹{destination.price}
                </div>
                {/* Rating Badge */}
                <div className='absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1'>
                  {renderStars(destination.star)}
                  <span className="ml-1">{destination.star}</span>
                </div>
              </div>

              {/* Content */}
              <div className='p-5'>
                <div className='flex items-center gap-2 text-gray-500 text-sm mb-2'>
                  <Clock className="h-4 w-4" />
                  <span>{destination.time}</span>
                </div>
                
                <h3 className='text-xl font-bold mb-2 text-gray-800 group-hover:text-red-500 transition-colors'>
                  {destination.name}
                </h3>
                
                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {destination.description}
                </p>
                
                <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
                  <MapPin className="h-4 w-4" />
                  <span>{destination.name.split(',')[0]}</span>
                  <span className="mx-1">•</span>
                  <span>{destination.reviews}</span>
                </div>

                <div className='flex gap-3'>
                  <button 
                    onClick={() => openBookingModal(destination)}
                    className='flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-[1.02]'
                  >
                    Book Now
                  </button>
                  <Link to="/gallery" className='flex-1'>
                    <button className='w-full bg-gray-800 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300'>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tours Button */}
        <div className='text-center mt-12'>
          <button className='bg-gray-800 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'>
            View All Tours
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedTour && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100">
              
              {/* Close Button */}
              {!isSubmitting && !submitted && (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>
              )}

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-t-2xl p-6 text-white">
                <h3 className="text-2xl font-bold">Book Your Tour</h3>
                <p className="text-white/90 mt-1">
                  {selectedTour.name} • {selectedTour.time}
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Price: ₹{selectedTour.price}
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="John Doe"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="john@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="+1 234 567 8900"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Travel Date & Travelers Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Travel Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            type="date"
                            name="travelDate"
                            required
                            value={formData.travelDate}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Travelers *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <select
                            name="travelers"
                            value={formData.travelers}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all appearance-none"
                            disabled={isSubmitting}
                          >
                            <option value="1">1 Traveler</option>
                            <option value="2">2 Travelers</option>
                            <option value="3">3 Travelers</option>
                            <option value="4">4 Travelers</option>
                            <option value="5">5+ Travelers</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                        placeholder="Dietary restrictions, accessibility needs, preferred activities..."
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    {/* Tour Summary */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Tour:</strong> {selectedTour.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Duration:</strong> {selectedTour.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Price:</strong> ₹{selectedTour.price}
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Book Now - ₹{selectedTour.price}
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                ) : (
                  /* Success Message */
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Booking Request Sent!</h4>
                    <p className="text-slate-600">
                      Thank you for choosing {selectedTour.name}! Our travel experts will contact you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Tours