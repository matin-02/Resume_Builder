import React from 'react'
import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import Template1 from '../Templates/Template1'
import Template2 from '../Templates/Template2'
import Template3 from '../Templates/Template3'

export default function Preview({ data }) {
  const [selectedTemplate, setSelectedTemplate] = useState(data.template)
  const resumeRef = useRef(null)

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value)
  }

  const downloadPDF = async () => {
    if (!resumeRef.current) return
    
    try {
      const dataUrl = await toPng(resumeRef.current)
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgProps = pdf.getImageProperties(dataUrl)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${data.personalInfo.firstName}_${data.personalInfo.lastName}_resume.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case '1':
        return <Template1 data={data} ref={resumeRef} />
      case '2':
        return <Template2 data={data} ref={resumeRef} />
      case '3':
        return <Template3 data={data} ref={resumeRef} />
      default:
        return <Template1 data={data} ref={resumeRef} />
    }
  }

  return (
    <div className="sticky top-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Template</label>
        <select
          value={selectedTemplate}
          onChange={handleTemplateChange}
          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="1">Professional</option>
          <option value="2">Modern</option>
          <option value="3">Creative</option>
        </select>
      </div>
      
      <div className="border rounded-lg overflow-hidden shadow-lg">
        {renderTemplate()}
      </div>
      
      <button
        onClick={downloadPDF}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Download PDF
      </button>
    </div>
  )
}