import React, { useState } from 'react'
import { Plane, Hotel, Map, Camera, Headphones, Shield, Sparkles, ArrowRight, X, Calendar, Users, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDate: '',
        travelers: '2',
        specialRequests: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const features = [
        {
            icon: <Plane className="h-8 w-8" />,
            title: "Exclusive Flight Deals",
            description: "Access to premium airlines and discounted airfares for your journey.",
            gradient: "from-blue-500 to-cyan-400",
            delay: "0s",
            slug: "flight-deals"
        },
        {
            icon: <Hotel className="h-8 w-8" />,
            title: "Luxury Accommodations",
            description: "Hand-picked hotels and resorts for a comfortable and memorable stay.",
            gradient: "from-purple-500 to-pink-400",
            delay: "0.1s",
            slug: "luxury-accommodations"
        },
        {
            icon: <Map className="h-8 w-8" />,
            title: "Customized Itineraries",
            description: "Tailor-made travel plans to suit your preferences and interests.",
            gradient: "from-emerald-500 to-teal-400",
            delay: "0.2s",
            slug: "customized-itineraries"
        },
        {
            icon: <Camera className="h-8 w-8" />,
            title: "Guided Tours",
            description: "Expert local guides to enhance your travel experience and knowledge.",
            gradient: "from-orange-500 to-amber-400",
            delay: "0.3s",
            slug: "guided-tours"
        },
        {
            icon: <Headphones className="h-8 w-8" />,
            title: "24/7 Customer Support",
            description: "Round-the-clock assistance for any queries or emergencies during your trip.",
            gradient: "from-rose-500 to-red-400",
            delay: "0.4s",
            slug: "customer-support"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Travel Insurance",
            description: "Comprehensive coverage options for a worry-free vacation.",
            gradient: "from-indigo-500 to-blue-400",
            delay: "0.5s",
            slug: "travel-insurance"
        }
    ]

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
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                    
                    {/* Subtle Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="#3b82f6" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    {/* Section Header with Enhanced Design */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <Sparkles className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700 tracking-wide">PREMIUM FEATURES</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                            Why Choose Our Travel Services
                        </h2>

                        <div className="mt-6 max-w-2xl mx-auto">
                            <p className="text-slate-600 md:text-xl leading-relaxed">
                                Discover the unique features that make your journey with us extraordinary
                            </p>
                            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden"
                                style={{ animationDelay: feature.delay }}
                            >
                                {/* Animated Gradient Border */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl`}></div>
                                
                                {/* Inner Content */}
                                <div className="relative p-8 text-center z-10 bg-white/90 rounded-2xl m-[1px] transition-all duration-300 group-hover:bg-white/95">
                                    {/* Icon Container with Hover Effect */}
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}>
                                        <div className="text-white">
                                            {React.cloneElement(feature.icon, { className: "h-9 w-9" })}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                                        {feature.description}
                                    </p>

                                    {/* Learn More Link - Navigates to About page */}
                                    <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <Link 
                                            to="/about" 
                                            className={`inline-flex items-center gap-1 text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:gap-2 transition-all`}
                                        >
                                            Learn More 
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA - Opens Booking Modal */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-white/50 hover:shadow-md transition-all duration-300">
                            <span className="text-slate-600">Ready to start your adventure?</span>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                            >
                                Book your dream trip today →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
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
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-t-2xl p-6 text-white">
                                <h3 className="text-2xl font-bold">Book Your Dream Trip</h3>
                                <p className="text-blue-100 mt-1">Fill in your details and we'll get back to you within 24 hours</p>
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
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                                placeholder="John Doe"
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                                placeholder="john@example.com"
                                                disabled={isSubmitting}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                                placeholder="+1 234 567 8900"
                                                disabled={isSubmitting}
                                            />
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
                                                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none"
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
                                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                                placeholder="Dietary restrictions, accessibility needs, preferred activities..."
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-4 w-4" />
                                                    Submit Booking Request
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
                                            Thank you for choosing us! Our travel experts will contact you within 24 hours to plan your dream trip.
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

export default Features