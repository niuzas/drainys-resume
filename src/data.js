import linkedin from './images/linkedin-logo.png';
import twitter from './images/twitter-logo.png';
import github from './images/github-logo.png';
import blog from './images/dev-to-logo.png';

const data = {
  en: {
    links: {
      title: 'Links',
      items: [
        {
          img: linkedin,
          text: 'Linkedin/UserName',
          url: 'https://linkedin.com/',
          alt: 'linkedin logo',
        },
        {
          img: twitter,
          text: '@DRainys',
          url: 'https://twitter.com/drainys',
          alt: 'twitter logo',
        },
        {
          img: github,
          text: 'darius-rainys',
          url: 'https://github.com/darius-rainys',
          alt: 'github logo',
        },
        { img: blog, text: 'My Blog', url: 'https://dev.to/', alt: 'dev.to logo' },
      ],
    },
    about: {
      title: 'About Me',
      body: 'Programmer.',
    },
    education: {
      title: 'Education',
      data: [
        { name: 'School One', period: '2003 - 2015', degree: 'BA' },
        { name: 'School Two', period: '2017 - 2021', degree: 'MBA' },
      ],
    },
    personalSkills: {
      title: 'Personal Skills',
      data: [
        { name: 'Komandinis darbas', color: 'green' },
        { name: 'Bendravimas', color: 'yellow' },
        { name: 'Organizuotumas', color: 'red' },
      ],
    },
    technicalSkills: {
      title: 'Technical Skills',
      data: [
        { name: 'HTML', color: 'green' },
        { name: 'CSS', color: 'yellow' },
        { name: 'JavaScript', color: 'green' },
      ],
    },
    experience: {
      title: 'Experience',
      data: [
        {
          company: 'Shpotify',
          title: 'Good Person',
          period: '2020 - 2025',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
        {
          company: 'Shpotify',
          title: 'Very Good Person',
          period: '2025 - 2030',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
        {
          company: 'Shpotify',
          title: 'Very Best Person',
          period: '2030 - present',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
      ],
    },
    contacts: {
      title: 'Contacts',
      data: [
        { title: 'Address', content: ['Some st. 59', 'Vilnius, Narnia'] },
        {
          title: 'Contact',
          content: [
            { href: 'tel:+37060000333', text: '+37060000333' },
            { href: 'email@test.dev', text: 'email@test.dev' },
          ],
        },
        {
          title: 'Social',
          content: [
            { href: 'https://linkedin.com/', text: 'Linkedin/mindaugas' },
            { href: 'https://twitter.com/mjacionis', text: 'Twitter/@MJacionis' },
          ],
        },
      ],
    },
  },
  lt: {
    links: {
      title: 'Nuorodos',
      items: [
        {
          img: linkedin,
          text: 'Linkedin/UserName',
          url: 'https://linkedin.com/',
          alt: 'linkedin logotipas',
        },
        {
          img: twitter,
          text: '@DRainys',
          url: 'https://twitter.com/drainys',
          alt: 'twitter logotipas',
        },
        {
          img: github,
          text: 'darius-rainys',
          url: 'https://github.com/darius-rainys',
          alt: 'github logotipas',
        },
        { img: blog, text: 'Asmeninis Blogas', url: 'https://dev.to/', alt: 'dev.to logotipas' },
      ],
    },
    about: {
      title: 'Apie Mane',
      body: 'Programeris konkrečiai.',
    },
    education: {
      title: 'Mokslai',
      data: [
        { name: 'Mokykla Pirma', period: '2003 - 2015', degree: 'BA' },
        { name: 'Mokykla antra', period: '2017 - 2021', degree: 'MBA' },
      ],
    },
    personalSkills: {
      title: 'Asmeniniai Įgūdžiai',
      data: [
        { name: 'Komandinis darbas', color: 'green' },
        { name: 'Bendravimas', color: 'yellow' },
        { name: 'Organizuotumas', color: 'red' },
      ],
    },
    technicalSkills: {
      title: 'Techniniai Įgūdžiai',
      data: [
        { name: 'HTML', color: 'green' },
        { name: 'CSS', color: 'yellow' },
        { name: 'JavaScript', color: 'green' },
      ],
    },
    experience: {
      title: 'Patirtis',
      data: [
        {
          company: 'Shpotify',
          title: 'Good Person',
          period: '2020 - 2025',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
        {
          company: 'Shpotify',
          title: 'Very Good Person',
          period: '2025 - 2030',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
        {
          company: 'Shpotify',
          title: 'Very Best Person',
          period: '2030 - present',
          achievements: ['Listened to whole DB of records', 'Make logo', 'Increase sales with use of A/B tests'],
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.',
        },
      ],
    },
  },
  contacts: {
    title: 'Kontaktai',
    data: [
      { title: 'Address', content: ['Some st. 59', 'Vilnius, Narnia'] },
      {
        title: 'Contact',
        content: [
          { href: 'tel:+37060000333', text: '+37060000333' },
          { href: 'email@test.dev', text: 'email@test.dev' },
        ],
      },
      {
        title: 'Social',
        content: [
          { href: 'https://linkedin.com/', text: 'Linkedin/mindaugas' },
          { href: 'https://twitter.com/mjacionis', text: 'Twitter/@MJacionis' },
        ],
      },
    ],
  },
};

export default data;
