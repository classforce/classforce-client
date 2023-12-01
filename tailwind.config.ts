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
        dark: '#161006',
        white: '#ffffff',
        green: '#32d76a',
        red: '#ed4337',
      },
      fontSize: {
        display: ['67.34px', { lineHeight: '100%', fontWeight: 'bold' }],
        'heading-l': ['39.9px', { lineHeight: '100%', fontWeight: 'medium' }],
        'heading-m': ['28.43px', { lineHeight: '100%', fontWeight: 'medium' }],
        'heading-s': ['21.33px', { lineHeight: '100%', fontWeight: 'medium' }],
        body: ['16px', { lineHeight: '150%', fontWeight: 'regular' }],
        small: ['14px', { lineHeight: '150%', fontWeight: 'regular' }],
      },
    },
  },
  plugins: [],
};
export default config;
