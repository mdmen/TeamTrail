import localFont from 'next/font/local';

export const fontInter = localFont({
  variable: '--font-inter',
  display: 'swap',
  src: [
    {
      path: '../../assets/fonts/Inter-roman.var.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Inter-italic.var.woff2',
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
