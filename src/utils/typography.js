import '../styles/global.css'

import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

// Override the theme to use Roboto for all text
Wordpress2016.headerFontFamily = ['Roboto', 'sans-serif']
Wordpress2016.bodyFontFamily = ['Roboto', 'sans-serif']

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      color: 'var(--textLink)',
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
      boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
    'blockquote p': {
      color: 'var(--blockquote)'
    },
    a: {
      color: 'var(--link)'
    },
    // Force all headings to use Roboto
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Roboto, sans-serif !important',
    },
    // Force body text to use Roboto
    'p, div, span, li, td, th': {
      fontFamily: 'Roboto, sans-serif !important',
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
