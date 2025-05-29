import { FaFilePdf, FaEdit, FaPalette } from 'react-icons/fa'
import React from 'react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaEdit className="text-4xl mb-4 text-blue-600" />,
      title: "Easy to Use",
      description: "Fill in your details and generate a professional resume in minutes."
    },
    {
      icon: <FaPalette className="text-4xl mb-4 text-blue-600" />,
      title: "Multiple Templates",
      description: "Choose from several professionally designed resume templates."
    },
    {
      icon: <FaFilePdf className="text-4xl mb-4 text-blue-600" />,
      title: "PDF Download",
      description: "Download your resume as a PDF file ready to print or share."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Our Resume Builder</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}