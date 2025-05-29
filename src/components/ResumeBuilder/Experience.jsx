
import React from "react"
export default function Experience({ data, onChange, onAdd, onRemove }) {
  const handleChange = (id, e) => {
    const { name, value } = e.target
    const updatedExperience = data.map(item => 
      item.id === id ? { ...item, [name]: value } : item
    )
    onChange(updatedExperience)
  }

  return (
    <div className="space-y-6">
      {data.map((exp) => (
        <div key={exp.id} className="border p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="text"
                name="startDate"
                placeholder="MM/YYYY"
                value={exp.startDate}
                onChange={(e) => handleChange(exp.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                placeholder="MM/YYYY or Present"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleChange(exp.id, e)}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => onRemove(exp.id)}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={onAdd}
        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Experience
      </button>
    </div>
  )
}