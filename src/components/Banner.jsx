import React, { useState } from 'react'
import banner from '../assets/banner.jpg'
import { X, Calendar, Users, MapPin, Phone, Mail, User, Send } from 'lucide-react'

const Banner = () => {
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
            <div className='h-[500px] relative flex items-center' 
                style={{
                    backgroundImage: `url(${banner})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundAttachment: 'fixed'
                }}>
                <div className='bg-black inset-0 opacity-65 absolute'></div>
                <div className='text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20'>
                    <h2 className='lg:text-6xl text-4xl font-bold mb-6'>Ready to Start Your Adventure?</h2>
                    <p className='text-xl mb-8'>Book your dream vacation today and create unforgettable memories.</p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className='bg-red-500 hover:bg-red-600 px-8 py-3 rounded-md text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30'
                    >
                        Start Planning
                    </button>
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
                                <h3 className="text-2xl font-bold">Plan Your Adventure</h3>
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
                                                    placeholder="user@example.com"
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

export default Banner