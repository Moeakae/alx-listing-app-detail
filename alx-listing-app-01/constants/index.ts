import { Property } from '@/interfaces'

export const PROPERTYLISTINGSAMPLE: Property[] = [
  {
    id: 1,
    title: "Luxury Villa with Sea View",
    location: "Cape Town, South Africa",
    description:
      "This luxury villa offers stunning sea views, modern design, and comfortable amenities for your dream holiday.",
    amenities: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Kitchen", "Free Parking"],
    pricePerNight: 250,
    imageUrl: "/images/villa-sea-view.jpg"
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Drakensberg, South Africa",
    description:
      "A warm and inviting cabin in the mountains, perfect for nature lovers and hikers.",
    amenities: ["Fireplace", "Mountain View", "Hot Tub", "Kitchen"],
    pricePerNight: 150,
    imageUrl: "/images/mountain-cabin.jpg"
  },
  {
    id: 3,
    title: "Modern Apartment in City Center",
    location: "Johannesburg, South Africa",
    description:
      "Stay in the heart of the city with quick access to shops, restaurants, and nightlife.",
    amenities: ["Wi-Fi", "Gym Access", "Air Conditioning", "Balcony"],
    pricePerNight: 120,
    imageUrl: "/images/city-apartment.jpg"
  }
]
