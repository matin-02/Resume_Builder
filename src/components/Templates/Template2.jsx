import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Template2 = React.forwardRef(({ data }, ref) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div ref={ref} className="p-8 bg-white">
      <header className="flex items-start mb-8">
        <div className="mr-6 flex-1">
          <h1 className="text-3xl font-bold text-gray-800">
            {personalInfo.firstName} <span className="text-blue-600">{personalInfo.lastName}</span>
          </h1>
          <div className="text-gray-600 mt-1 space-y-1">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.address && <div>{personalInfo.address}</div>}
            {(personalInfo.linkedin || personalInfo.github) && (
              <div className="flex gap-4 pt-2">
                {personalInfo.linkedin && (
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                  >
                    <FaLinkedin className="text-lg" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                )}
                {personalInfo.github && (
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">GitHub</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {personalInfo.summary && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">PROFILE</h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">EXPERIENCE</h2>
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
              <h2 className="text-xl font-semibold text-blue-600 mb-2">EDUCATION</h2>
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
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">SKILLS</h2>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">{skill.skill}</span>
                    {skill.level && <span> - {skill.level}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

export default Template2;