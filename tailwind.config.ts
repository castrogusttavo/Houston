import type { Config } from 'tailwindcss'
import * as tokens from '@hello.softis/andromeda-tokens'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
        white: '#FFFFFF',
      },
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: {
        sans: tokens.fonts.default,
        mono: tokens.fonts.code,
      },
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
      maxWidth: {
        container: '80rem',
      },
      backgroundImage: {
        'top-header-background':
          "url('https://hugeicons.com/home/top_header_background.svg')",
        'icons-bg': "url('https://hugeicons.com/home/icons-bg.svg')",
        'pro-footer-sm-bg':
          "url('https://hugeicons.com/home/pro-footer-sm-bg.png')",
        'pro-footer-bg': "url('https://hugeicons.com/pro-footer-bg.png')",
        'icon-box-bg': "url('https://hugeicons.com/_next/static/media/icon-box-bg.ab806028.svg')"
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollCategories: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollTagType: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dash: {
          '0%': { 'stroke-dashoffset': '126' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
        scroll: 'scroll 50s linear infinite',
        scrollCategories: 'scroll 50s linear infinite',
        scrollTagType: 'scroll 60s linear infinite',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        dash: 'dash 4s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
}
export default config
