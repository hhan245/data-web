'use client';
import '../style/about.css';

import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function AboutPage() {
  const [theme, setTheme] = useState('dark');
  const [selectedExperience, setSelectedExperience] = useState(0);
  const educations = [
    {
      school: 'University of Economic Ho Chi Minh City',
      degree: 'Bachelor of Technology Innovation',
      timeline: 'Oct 2022 - Present',
    },
    {
      school: 'Nguyen Thi Minh Khai High School for the Gifted',
      degree: 'Specialized in English',
      timeline: 'Aug 2019 - May 2022',
      specialization: ['History']
    }
  ];
  const projects = [
    {
      title: 'Diabetes Prediction',
      role: 'Diabetes Prediction - Collaborator',
      date: '04/2023 | Ho Chi Minh, Vietnam',
      description: `In this group prject, I was primarily responsible for cleaning and preparing the Pima Indians Diabetes dataset, handled missing values, and performed exploratory data analysis (EDA) to identify correlations between features such as glucose levels, BMI, and insulin levels. 
      Conducted exploratory data analysis and descriptive statistics to identify trends, and correlations between features.
      Improved proficiency in statistical analysis and visualization tools, enabling me to translate raw data into meaningful insights.`
    },
    {
      title: 'Emotion Recognition',
      role: 'Emotion Recognition - Owner',
      date: '06/2023 | Ho Chi Minh, Vietnam',
      description: 'In this solo project, I worked on training machine learning models to recognize facial emotions using public image datasets. Training multiple models, evaluated their performance, and fine-tuned hyperparameters to improve model accuracy, achieving a maximum accuracy of 63.05%. Gained experience in applying machine learning models to real-world problems, particularly in the field of emotion recognition, where data quality and feature selection are critical.'
    },
    {
      title: 'Oil Spill Detection',
      role: 'Oil Spill Detection - Collaborator',
      date: '06/2024 | Ho Chi Minh, Vietnam',
      description: `In this group prject, I was primarily responsible for cleaning and preparing the Pima Indians Diabetes dataset, handled missing values, and performed exploratory data analysis (EDA) to identify correlations between features such as glucose levels, BMI, and insulin levels. 
      Conducted exploratory data analysis and descriptive statistics to identify trends, and correlations between features.
      Improved proficiency in statistical analysis and visualization tools, enabling me to translate raw data into meaningful insights.`
    },
    {
      title: 'The Jazza',
      role: 'The Jazza - Collaborator',
      date: '01/2020 - 05/2021 | Hanoi, Vietnam',
      description: `I designed and developed a desktop application using Java to help a pizza store manage its daily operations. Worked with a team to integrate a database MySQL to store customer and order data securely. 
      The project also included generating daily sales reports and integrating basic input validation for user forms. 
      Enhanced knowledge in database management and integration, specifically how to structure and query databases to provide real-time insights.`
    },
  ];
  const codingBiases = [
    { name: 'MySQL', icon: 'mysql.svg' },
    { name: 'Excel', icon: 'excel.png' },
    { name: 'Python', icon: 'python.webp' },
    { name: 'Tableau', icon: 'tableau.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Java', icon: 'java.svg' },
  ];
  const activities = [
  {
    title: 'UEH Mentoring Program',
    description: 'Worked on real-world problem-solving scenarios, receiving personalized advice to enhance decision-making and strategic thinking. Gained valuable insights into the professional world, networked with other mentees, and gained advice on effectively navigating career paths.',
  },
];



  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <main className="container"style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Get to know me Section */}
      <h1>Hi there! I'm Han</h1>
      <p className="intro">
        Xuan Han Nguyen | Han | Nguyễn Xuân Hân
        <br />
      
      </p>
      <div className="profile-image">
        <Image
          src="/images/shin.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="avatar"
        />
      </div>
      

      <div className="buttons">
        <a href="https://drive.google.com/file/d/12nteenrPm1bHqw88cskYrHUgGjcryAwC/view?usp=sharing" className="button">CV</a>
      </div>
      <p className="question">Welcome to the little corner of the Internet where Hân iu ơi becomes a vibe 🌷</p>
      {/* Get to know me Section */}
      <section className="about-me">
        <div className="about-me-container">
          <h2>Get to know me</h2>
          <p className="about-me-text">
            I'm a passionate data nerd who is excellent at finding insights that inform choices. I demonstrated my proficiency with Python, SQL, and Tableau by creating interactive dashboards and predictive models for my academic assignments.
            <br />
            My attention to detail and commitment to tackling challenging issues have continuously produced outcomes that can be put into practice. I'm driven to use this enthusiasm and knowledge to a position as a data analyst, transforming raw data into insightful stories.
          </p>
        </div>
      </section>
      {/* About my educations Section */}
      <section className="educations">
        <h2>About my educations</h2>
        <div className="education-detail">
          {educations.map((edu, index) => (
            <div key={index} >
              <h3>{edu.school}</h3>
              <p>{edu.timeline}</p>
              <h4>{edu.degree}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* About my Project Section */}
      <section className="projects">
        <h2>About my projects</h2>
        <div className="project-list">
          {projects.map((exp, index) => (
            <div
              key={index}
              className={`project-item ${selectedExperience === index ? 'selected' : ''}`}
              onClick={() => setSelectedExperience(index)}
            >
              <span className="project-title">{exp.title}</span>
            </div>
          ))}
        </div>
        <div className="project-detail">
            {projects[selectedExperience] && (
            <div className="detail-content">
              <h3>{projects[selectedExperience].role}</h3>
              <p>{projects[selectedExperience].date}</p>
              <p>{projects[selectedExperience].description}</p>
            </div>
          )}
        </div>
      </section>
      {/* About My Coding Biases Section */}
      <section className="coding-biases">
        <h2>About my skills</h2>
        <div className="coding-biases-icons">
          {codingBiases.map((bias, index) => (
            <div key={index} className="coding-bias-item">
              <img src={`/images/${bias.icon}`} alt={bias.name} className="coding-bias-icon" />
              <span>{bias.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* About My Contributions Section */}
      <section className="contributions">
        <h2>About my activities</h2>
        <div className="activities">
          {activities.map((activities, index) => (
            <div key={index} className="activity-card">
              <h3>{activities.title}</h3>
              <p>{activities.description}</p>
    
            </div>
          ))}
        </div>
      </section>

      <div className="theme-toggle-container">
        <button
          aria-label="Toggle theme"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>

      
    </main>
  );
}
