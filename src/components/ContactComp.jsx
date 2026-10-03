import React, { useState } from 'react'
import contactImg from '../assets/ContactImg.jpg'
import { Mail, Phone, MapPin, Send, CheckCircle, User } from 'lucide-react'

const ContactComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            
            // Reset after 3 seconds
            setTimeout(() => {
                setSubmitted(false)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            }, 3000)
        }, 1500)
    }

    return (
        <div className='py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/30'>
            <div className='flex flex-col max-w-7xl mx-auto md:flex-row lg:min-h-[600px] items-center px-4 md:px-6'>
                {/* Image Section */}
                <div className='flex-1 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl mb-8 md:mb-0 md:mr-8'>
                    <img 
                        src={contactImg} 
                        alt="Contact Us" 
                        className='w-full h-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-700'
                    />
                </div>

                {/* Contact Form Section */}
                <div className='flex-1 bg-white rounded-2xl shadow-2xl w-full flex flex-col justify-center px-6 py-8 md:px-8 md:py-12'>
                    <div className='mb-8'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>Get in Touch</h2>
                        <p className='text-gray-500'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        <div className='mt-2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full'></div>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className='space-y-5'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Enter your name'
                                        className='mt-1 block w-full pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 transition-all duration-300 outline-none'
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your email'
                                        className='mt-1 block w-full pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 transition-all duration-300 outline-none'
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>
                                    Message *
                                </label>
                                <textarea                           
                                    id='message'
                                    name='message'
                                    rows='4'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Enter your message'
                                    className='mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 transition-all duration-300 outline-none resize-none'
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button 
                                type='submit' 
                                disabled={isSubmitting}
                                className='w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        /* Success Message */
                        <div className="text-center py-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                            <p className="text-gray-600">
                                Thank you for reaching out! We'll get back to you within 24 hours.
                            </p>
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className='mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-gray-100'>
                        <div className='text-center'>
                            <div className='inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full mb-2'>
                                <Phone className="h-5 w-5 text-red-500" />
                            </div>
                            <p className='text-xs text-gray-500'>Phone</p>
                            <p className='text-sm font-medium text-gray-700'>+1 234 567 890</p>
                        </div>
                        <div className='text-center'>
                            <div className='inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-2'>
                                <Mail className="h-5 w-5 text-orange-500" />
                            </div>
                            <p className='text-xs text-gray-500'>Email</p>
                            <p className='text-sm font-medium text-gray-700'>info@travelease.com</p>
                        </div>
                        <div className='text-center'>
                            <div className='inline-flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full mb-2'>
                                <MapPin className="h-5 w-5 text-amber-500" />
                            </div>
                            <p className='text-xs text-gray-500'>Location</p>
                            <p className='text-sm font-medium text-gray-700'>New York, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp