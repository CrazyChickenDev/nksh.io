module.exports = {
  siteTitle: 'Front-End Ninja',
  siteDescription: 'Eat Sleep Code Repeat.',
  siteKeywords:
    'Ankush Mehta, Ankush, Mehta, nkshio, software engineer, front-end engineer, web developer, javascript, remote',
  siteUrl: 'https://nksh.io',
  siteLanguage: 'en_US',

  name: 'Ankush Mehta',
  location: 'New Delhi, India',
  email: 'ping@nksh.io',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/nkshio/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nkshio/',
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/2458543/nkshio',
    },
    // {
    //   name: 'AngelList',
    //   url: 'https://angel.co/nkshio',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nkshio',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@nkshio',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
