import React from 'react'
import footer from '../assets/footer-pattern.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'


const Footer = () => {
    return (
        <footer 
            className='text-white py-12 md:py-16 relative overflow-hidden'
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            
            <div className='relative z-10 max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
                    {/* Brand Section */}
                    <div className='col-span-1 sm:col-span-2 lg:col-span-1'>
                        <h1 className='font-bold text-3xl md:text-4xl mb-4'>
                            <span className='text-red-500'>Travel</span>Friend
                        </h1>
                        <p className='text-sm text-gray-300 leading-relaxed'>
                            We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.
                        </p>
                        <div className='flex items-center gap-2 mt-4 text-gray-300 text-sm'>
                            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                            <span>Making travel dreams come true</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-white'>Quick Links</h3>
                        <ul className='space-y-2 text-sm text-gray-300'>
                            <li><Link to="/" className='hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block'>Home</Link></li>
                            <li><Link to="/tours" className='hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block'>Tours</Link></li>
                            <li><Link to="/gallery" className='hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block'>Gallery</Link></li>
                            <li><Link to="/about" className='hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block'>About Us</Link></li>
                            <li><Link to="/contact" className='hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block'>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-white'>Contact Us</h3>
                        <ul className='space-y-3 text-sm text-gray-300'>
                            <li className='flex items-start gap-3'>
                                <MapPin className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>123 Travel Street, City, Country</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                                <span>info@tripbuddy.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-white'>Follow Us</h3>
                        <div className='flex space-x-4'>
                            <a 
                                href="#" 
                                className='bg-white/10 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30'
                                aria-label="Facebook"
                            >
                                <FaFacebook className="h-5 w-5 hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className='bg-white/10 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30'
                                aria-label="Instagram"
                            >
                                <FaInstagram className="h-5 w-5 hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className='bg-white/10 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30'
                                aria-label="Twitter"
                            >
                                <FaTwitter className="h-5 w-5 hover:text-white" />
                            </a>
                            <a 
                                href="#" 
                                className='bg-white/10 hover:bg-red-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30'
                                aria-label="YouTube"
                            >
                                <FaYoutube className="h-5 w-5 hover:text-white" />
                            </a>
                        </div>
                        <p className='text-xs text-gray-400 mt-4'>Follow us for travel inspiration</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='mt-8 pt-8 border-t border-gray-700/50 text-center'>
                    <p className='text-sm text-gray-400'>
                        &copy; {new Date().getFullYear()} <span className='text-white font-medium'>TripBuddy</span>. All rights reserved. 
                        Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" /> for travelers
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer