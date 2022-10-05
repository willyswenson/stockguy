import { image, image2, image3 } from '../../images';
export const homeObjOne = {
    id: 'about',
    lightBg: false, 
    lightText: true,
    lightTextDesc: true,
    topLine: 'Our Goal',
    headline:'Educate',
    description: 'Strong financial literacy is essential to understanding any role in the financial industry. Our mission is to simplify complex ratios and data points that commonly appear in the banking world.',
    buttonLabel: 'getStarted',
    imgStart: false,
    img: image,
    alt: 'intro',
    dark: true,
    primary: true,
    darktext: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true, 
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Us',
    headline:'Learn to Love Learning',
    description: 'We are two young Cornell students eager to explore the world of finance. The intersection of our backgrounds, computer science, data science, and finance, allow us to create cool tools that help others eager to learn too.',
    buttonLabel: 'getStarted',
    imgStart: true,
    img: image2,
    alt: 'intro',
    dark: false,
    primary: false,
    darktext: true
};
export const homeObjThree = {
    id: 'services',
    lightBg: false, 
    lightText: true,
    lightTextDesc: true,
    topLine: 'Services',
    headline:'Real Time Data',
    description: 'Our unique educational tool pulls data from real companies, in real time. Using API requests from Financial Modeling Prep\'s database, all of the information you see if 100% accurate. All fundamental data is sourced from the U.S. Securities and Exchange Commission (SEC) and companies filings.',
    buttonLabel: 'getStarted',
    imgStart: false,
    img: image3,
    alt: 'intro',
    dark: true,
    primary: true,
    darktext: false
};