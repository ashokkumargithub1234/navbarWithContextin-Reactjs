// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarClassName = isDarkTheme
        ? 'navbar dark-theme'
        : 'navbar light-theme'
      const textClassname = isDarkTheme ? 'text text-dark' : 'text text-light'
      return (
        <div className={navbarClassName}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          )}
          <ul className="navigate-paths">
            <li className="list">
              <Link to="/" className={textClassname}>
                Home
              </Link>
            </li>
            <li className="list">
              <Link to="/about" className={textClassname}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme-logo"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext>
)
export default Navbar
