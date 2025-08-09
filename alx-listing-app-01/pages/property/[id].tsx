
import { useRouter } from 'next/router'
import { PROPERTYLISTINGSAMPLE } from '@/constants/propertyList'
import PropertyDetail from '@/components/property/PropertyDetail'
import { Property } from '@/interfaces'

export default function PropertyPage() {
  const router = useRouter()
  const { id } = router.query

  // Convert id from query string to number
  const property: Property | undefined = PROPERTYLISTINGSAMPLE.find(
    (p) => p.id === Number(id)
  )

  if (!property) {
    return <p className="text-center mt-20 text-gray-500">Property not found.</p>
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

