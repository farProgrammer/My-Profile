import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Farheena khan',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://1drv.ms/b/s!Aqg8Whk-mVpPsPdQcwMXkGYrrYXe-g?e=krHD1Z', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'amz2.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://my-store-amazon-app.herokuapp.com/',
    repo: 'https://github.com/farProgrammer/amz-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mkup.jpeg',
    title: '',
    info: '',
    info2: '',
    url: 'https://makeup-world.herokuapp.com/',
    repo: 'https://github.com/farProgrammer/makeup-world', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/farProgrammer/world-of-success', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
