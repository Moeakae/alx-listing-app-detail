interface BookingSectionProps {
  pricePerNight: number
}

export default function BookingSection({ pricePerNight }: BookingSectionProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <p className="text-lg font-semibold">
        ${pricePerNight} <span className="text-sm text-gray-500">/ night</span>
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Book Now
      </button>
    </div>
  )
}
