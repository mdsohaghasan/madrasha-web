import { FaCalendar } from "react-icons/fa"

interface EventCardProps {
  title: string
  date: string
  description: string
}

export function EventCard({ title, date, description }: EventCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-green-600 mb-2">
        <FaCalendar className="mr-2" />
        <span>{date}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

