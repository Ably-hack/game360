import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD0000',
        'primary-light': '#F7EBEB',
        neutral: {
          400: '#9A9EA2',
          500: '#797979',
          600: '#1A1B1C',
          900: '#171717',
        },
        grey: {
          50: '#F7F7F7',
          75: '#EDEDED',
          100: '#8C8C8C',
          200: '#E5E5E5',
        },
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        xs: '	0.75rem', // 12px
        sm: '	0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.5rem', // 24px
        xxl: '4rem', // will be updated if need be
        extra: '1.25rem', // will be updated if need be
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      screens: {
        xs: '320px',
        // => @media (min-width: 0px) { ... }

        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '992px',
        // => @media (min-width: 992px) { ... }

        xlg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1200px',
        // => @media (min-width: 1200px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '2560px',
        // => @media (min-width: 2560px) { ... }
      },
      backgroundImage: {
        auth: "url('/images/Authentication.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
