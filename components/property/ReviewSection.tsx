export default function ReviewSection() {
  // In a real app, reviews would come from the database or API
  const reviews = [
    { name: "Jane Doe", comment: "Amazing place!", rating: 5 },
    { name: "John Smith", comment: "Very comfortable stay.", rating: 4 },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <p className="font-semibold">{review.name}</p>
          <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}
