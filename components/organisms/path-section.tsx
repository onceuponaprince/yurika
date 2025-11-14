import React from "react"

export default function ChoosePath() {
  return (
    <div className="flex justify-center space-x-8 p-8">
      {[
        {
          title: "Developer Path",
          description: "Learn the skills and tools needed to become a successful developer.",
        },
        {
          title: "Partner Path",
          description: "Discover how to collaborate and grow with us as a partner.",
        },
        {
          title: "Sponsor Path",
          description: "Find out how sponsoring us can benefit your organization.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 w-64 transform transition duration-300 hover:scale-105 hover:bg-blue-100"
        >
          <h2 className="text-xl font-bold mb-4">{card.title}</h2>
          <p className="text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  )
}