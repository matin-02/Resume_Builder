import React from "react"

export default function Skills({ data, onChange, onAdd, onRemove }) {
  const handleChange = (id, e) => {
    const { name, value } = e.target
    const updatedSkills = data.map(item => 
      item.id === id ? { ...item, [name]: value } : item
    )
    onChange(updatedSkills)
  }

  return (
    <div className="space-y-6">
      {data.map((skill) => (
        <div key={skill.id} className="border p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Skill</label>
              <input
                type="text"
                name="skill"
                value={skill.skill}
                onChange={(e) => handleChange(skill.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Level</label>
              <select
                name="level"
                value={skill.level}
                onChange={(e) => handleChange(skill.id, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => onRemove(skill.id)}
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
        Add Skill
      </button>
    </div>
  )
}