import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import '../styles/toggler.css';

class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="toggle-btn">
            <input
              type="checkbox"   
              id="toggle"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <label for="toggle"></label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggler