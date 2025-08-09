import Image from 'next/image'
import BookingSection from './BookingSection'
import ReviewSection from './ReviewSection'

interface PropertyDetailProps {
  title: string
  location: string
  description: string
  amenities: string[]
  pricePerNight: number
  imageUrl: string
}

export default function PropertyDetail({
  title,
  location,
  description,
  amenities,
  pricePerNight,
  imageUrl
}: PropertyDetailProps) {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      {/* Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Title & Location */}
      <header>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{location}</p>
      </header>

      {/* Description */}
      <section>
        <h2 className="text-xl font-semibold mb-2">About this property</h2>
        <p className="text-gray-700">{description}</p>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="grid grid-cols-2 gap-2">
          {amenities.map((amenity, index) => (
            <li key={index} className="text-gray-600">• {amenity}</li>
          ))}
        </ul>
      </section>

      {/* Booking Section */}
      <BookingSection pricePerNight={pricePerNight} />

      {/* Review Section */}
      <ReviewSection />
    </div>
  )
}
