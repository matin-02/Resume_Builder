import { Link } from 'react-router-dom';
import React from 'react';
const TemplatesPage = () => {
  const templates = [
    { 
      id: 1, 
      name: "Professional", 
      description: "Clean and traditional design perfect for corporate environments", 
      bgColor: "bg-blue-600"
    },
    { 
      id: 2, 
      name: "Modern", 
      description: "Sleek contemporary design with a focus on typography and white space", 
      bgColor: "bg-green-600"
    },
    { 
      id: 3, 
      name: "Creative", 
      description: "Unique layout with visual elements for creative professionals", 
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 relative pb-4">
          Choose a Resume Template
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h1>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`${template.bgColor} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="bg-white rounded-lg h-48 flex items-center justify-center mb-6">
                  <span className="text-gray-800 font-bold text-lg">Template Preview</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{template.name}</h3>
                <p className="text-gray-100 mb-6 flex-grow">{template.description}</p>
                
                <Link
                  to="/builder"
                  state={{ template: template.id.toString() }}
                  className="inline-block w-full bg-white text-gray-900 text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;