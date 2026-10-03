import React, { useState } from 'react'
import { Camera, Search, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import images directly from src/assets/
import NepalImg from '../assets/Nepal.jpg'
import Hero1Img from '../assets/Hero1.jpg'
import Hero2Img from '../assets/Hero2.jpg'
import Hero3Img from '../assets/Hero3.jpg'
import Hero4Img from '../assets/Hero4.jpg'
import BaliImg from '../assets/Bali.jpg'
import VeniceImg from '../assets/Venice.jpg'
import ParisImg from '../assets/Paris.jpg'
import TokyoImg from '../assets/Tokyo.jpg'

const GalleryComp = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Use imported images
    const galleryImages = [
        { 
            src: NepalImg, 
                       alt: 'Nepal - Mountains', 
                       category: 'Environment',
                       title: 'Mountains, Nepal',
                       description: 'Experience the timeless beauty of Nepal Mountains, one of the Seven Wonders of the World.',
                       location: ' Nepal',
                       date: 'December 2024'
        },
        { 
            src: Hero1Img, 
            alt: 'Mountain Adventure', 
            category: 'Adventure',
            title: 'Mountain Trekking',
            description: 'Conquer the peaks with our guided adventures'
        },
        { 
            src: Hero2Img, 
            alt: 'Beach Paradise', 
            category: 'Beach',
            title: 'Tropical Paradise',
            description: 'Relax on pristine beaches around the world'
        },
        { 
            src: Hero3Img, 
            alt: 'City Lights', 
            category: 'Urban',
            title: 'City Skyline',
            description: 'Explore vibrant cityscapes and urban adventures'
        },
        { 
            src: Hero4Img, 
            alt: 'Sunset View', 
            category: 'Nature',
            title: 'Golden Sunset',
            description: 'Witness breathtaking sunsets across the globe'
        },
        { 
            src: BaliImg, 
            alt: 'Bali - Rice Terraces', 
            category: 'Cultural',
            title: 'Bali Rice Terraces',
            description: 'Discover the stunning rice terraces of Bali'
        },
        { 
            src: VeniceImg, 
            alt: 'Venice - Grand Canal', 
            category: 'Urban',
            title: 'Venice Canals',
            description: 'Cruise through the romantic canals of Venice'
        },
        { 
            src: ParisImg, 
            alt: 'Paris - Eiffel Tower', 
            category: 'Urban',
            title: 'Eiffel Tower, Paris',
            description: 'Experience the magic of the City of Light'
        },
        { 
            src: TokyoImg, 
            alt: 'Tokyo - City Life', 
            category: 'Urban',
            title: 'Tokyo Cityscape',
            description: 'Immerse yourself in the vibrant culture of Tokyo'
        },
    ];

    const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setSelectedImage(filteredImages[index])
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
    }

    const navigateImage = (direction) => {
        const newIndex = currentIndex + direction
        if (newIndex >= 0 && newIndex < filteredImages.length) {
            setCurrentIndex(newIndex)
            setSelectedImage(filteredImages[newIndex])
        }
    }

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') navigateImage(-1)
            if (e.key === 'ArrowRight') navigateImage(1)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage, currentIndex])

    return (
        <div className='max-w-7xl mx-auto mb-20 px-4 md:px-6 mt-10'>
            {/* Section Header */}
            <div className='text-center mb-12'>
                <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 shadow-sm">
                    <Camera className='h-4 w-4 text-amber-600' />
                    <span className='text-sm font-medium text-amber-700 tracking-wide'>CAPTURED MOMENTS</span>
                </div>
                
                <h2 className='text-4xl md:text-5xl font-bold tracking-tight font-serif bg-gradient-to-r from-slate-900 via-amber-800 to-slate-900 bg-clip-text text-transparent'>
                    Our Gallery
                </h2>
                
                <div className='mt-4 max-w-2xl mx-auto'>
                    <p className='text-slate-600 md:text-lg'>
                        Explore beautiful destinations captured through our lens
                    </p>
                    <div className='mt-3 w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto'></div>
                </div>
            </div>

            {/* Category Filters */}
            <div className='flex flex-wrap justify-center gap-2 mb-10'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`
                            px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                            ${activeCategory === category 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                                : 'bg-white/80 text-slate-600 hover:bg-amber-50 border border-slate-200 hover:border-amber-300'
                            }
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery Grid - First 8 Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.slice(0, 8).map((image, index) => (
                    <div 
                        key={index}
                        onClick={() => openLightbox(index)}
                        className={`
                            group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                            transition-all duration-500 hover:-translate-y-2 cursor-pointer
                            ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}
                            ${index % 7 === 0 ? 'col-span-1 row-span-2' : ''}
                        `}
                    >
                        <img 
                            alt={image.alt} 
                            src={image.src} 
                            className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-amber-300 font-medium">{image.category}</p>
                                    <h3 className="text-lg font-bold">{image.title}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                                        <Search className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                {index + 1} / {filteredImages.length}
                            </span>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-xl">
                                <Search className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Full Gallery Button */}
            <div className="mt-12 text-center">
                <Link to="/gallery">
                    <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                        <span>View Full Gallery</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>

            {/* Gallery Stats */}
            <div className="mt-12 grid grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="text-2xl font-bold text-amber-600">{galleryImages.length}+</div>
                    <div className="text-xs text-slate-500 mt-1">Photos</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-xs text-slate-500 mt-1">Destinations</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="text-2xl font-bold text-amber-600">4.9</div>
                    <div className="text-xs text-slate-500 mt-1">Rating</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-slate-100 hidden md:block">
                    <div className="text-2xl font-bold text-amber-600">✨</div>
                    <div className="text-xs text-slate-500 mt-1">Memories</div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <X className="h-8 w-8" />
                    </button>

                    {currentIndex > 0 && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); navigateImage(-1) }}
                            className="absolute left-4 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                    )}
                    {currentIndex < filteredImages.length - 1 && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); navigateImage(1) }}
                            className="absolute right-4 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>
                    )}

                    <div 
                        className="max-w-5xl max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                            <p className="text-amber-300 text-sm">{selectedImage.category}</p>
                            <p className="text-white/80 mt-1">{selectedImage.description}</p>
                            <p className="text-white/50 text-xs mt-2">
                                {currentIndex + 1} / {filteredImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) 
}

export default GalleryComp