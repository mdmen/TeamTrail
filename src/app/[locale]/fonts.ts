import localFont from 'next/font/local';

// https://fonts.google.com/specimen/Inter
export const fontInter = localFont({
  variable: '--font-inter',
  display: 'swap',
  src: [
    {
      path: '../../assets/fonts/Inter-roman.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Inter-italic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
});

// https://fonts.google.com/specimen/Coiny
export const fontCoiny = localFont({
  variable: '--font-coiny',
  display: 'swap',
  src: [
    {
      path: '../../assets/fonts/Coiny-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
});
