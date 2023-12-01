import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffbd59',
        dark: '#0E0A05',
        white: '#ffffff',
        green: '#32d76a',
        red: '#ed4337',
      },
      fontSize: {
        display: '67.34px',
        'heading-l': '39.9px',
        'heading-m': '28.43px',
        'heading-s': '21.33px',
        body: '16px',
        small: '14px',
      },
    },
  },
  plugins: [],
};
export default config;
