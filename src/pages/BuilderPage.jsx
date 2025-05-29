import { useState } from 'react';
import React from 'react';
import PersonalInfo from '../components/ResumeBuilder/PersonalInfo';
import Education from '../components/ResumeBuilder/Education';
import Experience from '../components/ResumeBuilder/Experience';
import Skills from '../components/ResumeBuilder/Skills';
import Preview from '../components/ResumeBuilder/Preview';

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      summary: ''
    },
    education: [
      { id: 1, institution: '', degree: '', field: '', startDate: '', endDate: '', description: '' }
    ],
    experience: [
      { id: 1, company: '', position: '', startDate: '', endDate: '', description: '' }
    ],
    skills: [{ id: 1, skill: '', level: '' }],
    template: '1'
  });

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const addNewItem = (section) => {
    const newId = resumeData[section].length > 0 
      ? Math.max(...resumeData[section].map(item => item.id)) + 1 
      : 1;
    
    const newItem = section === 'education' 
      ? { id: newId, institution: '', degree: '', field: '', startDate: '', endDate: '', description: '' }
      : section === 'experience'
      ? { id: newId, company: '', position: '', startDate: '', endDate: '', description: '' }
      : { id: newId, skill: '', level: '' };
    
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, id) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Resume Builder</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex border-b mb-6 overflow-x-auto">
            <button
              className={`py-2 px-4 whitespace-nowrap ${activeTab === 'personal' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Info
            </button>
            <button
              className={`py-2 px-4 whitespace-nowrap ${activeTab === 'education' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`py-2 px-4 whitespace-nowrap ${activeTab === 'experience' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`py-2 px-4 whitespace-nowrap ${activeTab === 'skills' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </div>

          {activeTab === 'personal' && (
            <PersonalInfo 
              data={resumeData.personalInfo} 
              onChange={(data) => updateResumeData('personalInfo', data)} 
            />
          )}
          {activeTab === 'education' && (
            <Education 
              data={resumeData.education} 
              onChange={(data) => updateResumeData('education', data)} 
              onAdd={() => addNewItem('education')}
              onRemove={(id) => removeItem('education', id)}
            />
          )}
          {activeTab === 'experience' && (
            <Experience 
              data={resumeData.experience} 
              onChange={(data) => updateResumeData('experience', data)} 
              onAdd={() => addNewItem('experience')}
              onRemove={(id) => removeItem('experience', id)}
            />
          )}
          {activeTab === 'skills' && (
            <Skills 
              data={resumeData.skills} 
              onChange={(data) => updateResumeData('skills', data)} 
              onAdd={() => addNewItem('skills')}
              onRemove={(id) => removeItem('skills', id)}
            />
          )}
        </div>

        <div className="md:w-1/2 sticky top-4">
          <Preview data={resumeData} />
        </div>
      </div>
    </div>
  );
}