import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Template3 = React.forwardRef(({ data }, ref) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div ref={ref} className="p-8 bg-gray-50">
      <header className="flex items-start mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-lg mr-6">
          <h1 className="text-3xl font-bold">
            {personalInfo.firstName}
          </h1>
          <h1 className="text-3xl font-bold">
            {personalInfo.lastName}
          </h1>
        </div>
        <div className="pt-2">
          {personalInfo.email && (
            <div className="flex items-center mb-2">
              <span className="text-gray-700">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center mb-2">
              <span className="text-gray-700">{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center mb-2">
              <span className="text-gray-700">{personalInfo.address}</span>
            </div>
          )}
          {(personalInfo.linkedin || personalInfo.github) && (
            <div className="flex items-center gap-4 pt-2">
              {personalInfo.linkedin && (
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              )}
              {personalInfo.github && (
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {personalInfo.summary && (
            <section className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 border-b border-blue-100 pb-1">ABOUT ME</h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 border-b border-blue-100 pb-1">WORK EXPERIENCE</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-800">{exp.position}</h3>
                    <span className="text-gray-600">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-1 italic">
                    {exp.company}
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 mt-1">{exp.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 border-b border-blue-100 pb-1">EDUCATION</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <span className="text-gray-600">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-1 italic">
                    {edu.institution}
                  </div>
                  {edu.field && (
                    <div className="text-gray-700">{edu.field}</div>
                  )}
                  {edu.description && (
                    <p className="text-gray-700 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>

        <div className="md:col-span-1">
          {skills.length > 0 && (
            <section className="mb-6 bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 border-b border-blue-100 pb-1">SKILLS</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800">{skill.skill}</span>
                      {skill.level && <span className="text-gray-600 text-sm">{skill.level}</span>}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ 
                          width: skill.level === 'Beginner' ? '25%' : 
                                 skill.level === 'Intermediate' ? '50%' : 
                                 skill.level === 'Advanced' ? '75%' : '100%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default Template3;