import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Template1 = React.forwardRef(({ data }, ref) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div ref={ref} className="p-8 bg-white">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>

        {(personalInfo.linkedin || personalInfo.github) && (
          <div className="flex justify-center gap-4 mt-3">
            {personalInfo.linkedin && (
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin className="inline mr-1" />
                LinkedIn
              </a>
            )}
            {personalInfo.github && (
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <FaGithub className="inline mr-1" />
                GitHub
              </a>
            )}
          </div>
        )}
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Work Experience</h2>
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
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                <span className="text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <div className="text-gray-700 mb-1">
                {edu.institution}{edu.field && `, ${edu.field}`}
              </div>
              {edu.description && (
                <p className="text-gray-700 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"
              >
                {skill.skill}{skill.level && ` (${skill.level})`}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
});

export default Template1;