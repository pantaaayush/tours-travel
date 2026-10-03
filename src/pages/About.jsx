import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'
import { 
  Award, Users, Globe, Star, Clock, CheckCircle, 
  X, Calendar, MapPin, Phone, Mail, User, Send 
} from 'lucide-react'

const About = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '2',
    specialRequests: ''
  })

  // Stats data
  const stats = [
    { icon: <Globe className="h-8 w-8" />, number: '50+', label: 'Destinations' },
    { icon: <Users className="h-8 w-8" />, number: '10K+', label: 'Happy Travelers' },
    { icon: <Award className="h-8 w-8" />, number: '15+', label: 'Awards Won' },
    { icon: <Star className="h-8 w-8" />, number: '4.9', label: 'Rating' },
  ]

  // Features data
  const features = [
    {
      icon: trip,
      title: '50+ Destinations',
      description: 'We offer the best travel experiences with personalized services and unbeatable prices.',
      link: '/gallery'
    },
    {
      icon: price,
      title: 'Best Price Guarantee',
      description: 'We offer the best travel experiences with personalized services and unbeatable prices.',
      link: '/gallery'
    },
    {
      icon: time,
      title: 'Super Fast Booking',
      description: 'We offer the best travel experiences with personalized services and unbeatable prices.',
      link: '/gallery'
    },
  ]

  // Form handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          travelDate: '',
          travelers: '2',
          specialRequests: ''
        })
      }, 2000)
    }, 1500)
  }

  return (
    <>
      <div>
        <TopBanner text='About Us' />
        
        {/* Main Content */}
        <div className='max-w-7xl mx-auto my-10 px-4 md:px-0'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Left Section - Image and Description */}
            <div className='flex-1'>
              <div className='relative'>
                <img 
                  src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Travel" 
                  className='rounded-2xl w-full h-[400px] object-cover shadow-xl'
                />
                {/* Badge Overlay */}
                <div className='absolute bottom-[-20px] right-4 lg:right-8 p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold md:text-3xl rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300'>
                  <span className="block text-sm font-normal">✨ BEST CHOICE</span>
                  HOW WE ARE BEST <br /> FOR TRAVEL!
                </div>
              </div>
              
              <h1 className='md:text-4xl font-bold mt-10 mb-4 text-3xl text-gray-800'>
                How We Are Best For Travel!
              </h1>
              <p className='text-gray-600 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt aperiam vel laboriosam odio officia, tenetur iure qui? Officiis placeat iste ratione perspiciatis rerum sed magni commodi pariatur reiciendis dicta molestiae dolor tenetur, dolorem minus exercitationem quod adipisci, ad tempore. Suscipit iste impedit soluta omnis laborum quisquam eveniet. Eos ipsam sed eligendi architecto libero doloremque nobis fugit, asperiores molestiae ullam nulla mollitia quidem maxime totam delectus itaque?
              </p>
              
              {/* Stats Section */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className='bg-white p-4 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                  >
                    <div className='text-red-500 flex justify-center mb-2'>
                      {stat.icon}
                    </div>
                    <div className='text-2xl font-bold text-gray-800'>{stat.number}</div>
                    <div className='text-sm text-gray-500'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Features Cards */}
            <div className='flex-1 space-y-4'>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-red-500'
                >
                  <div className='flex items-start gap-4'>
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className='w-16 h-16 object-contain'
                    />
                    <div>
                      <h2 className='text-xl font-semibold mb-2 text-gray-800'>
                        {feature.title}
                      </h2>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        {feature.description}
                      </p>
                      <Link to={feature.link}>
                        <button className='mt-3 text-red-500 font-medium hover:text-red-600 transition-colors flex items-center gap-1'>
                          Learn More 
                          <span className="text-sm">→</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trust Badge */}
              <div className='bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl shadow-md'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <CheckCircle className="h-5 w-5 text-red-500" />
                    <CheckCircle className="h-5 w-5 text-red-500" />
                    <CheckCircle className="h-5 w-5 text-red-500" />
                    <CheckCircle className="h-5 w-5 text-red-500" />
                    <CheckCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <span className='text-gray-700 font-medium'>Trusted by 10,000+ travelers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className='mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white'>
            <div className='text-center max-w-3xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Mission</h2>
              <div className='w-20 h-1 bg-red-500 mx-auto mb-6'></div>
              <p className='text-gray-300 leading-relaxed'>
                To transform the way people experience travel by providing personalized, 
                hassle-free, and memorable journeys that exceed expectations. We believe 
                that travel is not just about destinations, but about creating stories 
                that last a lifetime.
              </p>
              <div className='flex flex-wrap justify-center gap-4 mt-6'>
                <span className='bg-red-500/20 px-4 py-2 rounded-full text-sm'>✈️ Adventure</span>
                <span className='bg-red-500/20 px-4 py-2 rounded-full text-sm'>🌍 Exploration</span>
                <span className='bg-red-500/20 px-4 py-2 rounded-full text-sm'>💫 Memories</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-12 text-center'>
            <div className='inline-flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-xl'>
              <span className='text-gray-700 font-medium'>Ready to start your journey?</span>
              <button 
                onClick={() => setIsModalOpen(true)}
                className='bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105'
              >
                Book Your Adventure Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
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
                <h3 className="text-2xl font-bold">Book Your Adventure</h3>
                <p className="text-white/90 mt-1">Fill in your details and we'll help you create the perfect trip</p>
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

                    {/* Destination */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Dream Destination *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="Paris, Bali, Tokyo..."
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
                          Book Now
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
                      Thank you for choosing us! Our travel experts will contact you within 24 hours to plan your dream adventure.
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

export default About