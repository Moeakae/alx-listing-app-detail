import { useRouter } from 'next/router'
import PropertyDetail from '@/components/property/PropertyDetail'

export default function PropertyPage() {
  const router = useRouter()
  const { id } = router.query

  // Normally you'd fetch property data from API using `id`
  const property = {
    id,
    title: "Luxury Villa with Sea View",
    location: "Cape Town, South Africa",
    description:
      "This luxury villa offers stunning sea views and modern amenities for a comfortable stay.",
    amenities: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Kitchen"],
    pricePerNight: 250,
  }

  return (
    <PropertyDetail
      title={property.title}
      location={property.location}
      description={property.description}
      amenities={property.amenities}
      pricePerNight={property.pricePerNight}
    />
  )
}
