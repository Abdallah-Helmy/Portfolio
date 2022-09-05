import { faEnvelope, faGear, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const pages = [
  {
    name: '',
    icon: faHouse,
  },
  {
    name: 'About',
    icon: faUser,
  },
  {
    name: 'Works',
    icon: faGear,
  },
  {
    name: 'Contact',
    icon: faEnvelope,
  },
];

const socaillinks = [
  {
    link: 'https://www.facebook.com/abddalla.helmy25/',
    icon: faFacebook,
  },
  {
    link: 'https://www.instagram.com/abddalla.helmy25/',
    icon: faInstagram,
  },
  {
    link: 'https://github.com/Abdallah-Helmy',
    icon: faGithub,
  },
];

export { pages, socaillinks };
