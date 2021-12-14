import React, { useState } from 'react';

import Separator from './components/separator';
import Header from './components/header';
import Pill from './components/pill';
import ContentBox from './components/content-box';
import SocialsList from './components/socials-list';
import Experience from './components/experience';
import ContactBlock from './components/contact-block';

import data from './data';

import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const { links, about, education, personalSkills, technicalSkills, experience, contacts } = data[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <main className="main">
        <section className="section">
          <ContentBox className="flex-1" title={links.title}>
            <SocialsList items={links.items} />
          </ContentBox>
          <ContentBox className="flex-2" title={about.title}>
            <p>{about.body}</p>
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={education.title}>
            {education.data.map(({ name, period, degree }, i, arr) => (
              <React.Fragment key={i}>
                <div className="school-info">
                  <p>{name}</p>
                  <p>{period}</p>
                  <p>{degree}</p>
                </div>
                {arr.length - 1 !== i && <Separator isShort />}
              </React.Fragment>
            ))}
          </ContentBox>
          <div className="d-flex flex-2">
            <ContentBox title={personalSkills.title} className="flex-1 pills-box">
              {personalSkills.data.map(({ name, color }, i, arr) => (
                <Pill key={i} color={color}>
                  {name}
                </Pill>
              ))}
            </ContentBox>
            <ContentBox className="flex-1 pills-box" title={technicalSkills.title}>
              {technicalSkills.data.map(({ name, color }, i, arr) => (
                <Pill key={i} color={color}>
                  {name}
                </Pill>
              ))}
            </ContentBox>
          </div>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={experience.title}>
            <div className="content-box__content job-experience">
              {experience.data.map(({ company, title, period, achievements, body }, i) => (
                <Experience key={i} company={company} title={title} period={period} achievements={achievements}>
                  {body}
                </Experience>
              ))}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className={contacts.title}>
          {contacts.data.map((data, i) => (
            <ContactBlock key={i} {...data} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
